<template>
  <div id="game-play">
    <v-row>
      <v-col>
        <v-col class="canvas1">

          <v-btn @click="easyGame">
            Easy
          </v-btn>
          <v-btn @click="normalGame">
            Normal
          </v-btn>
          <v-btn @click="hardGame">
            Hard
          </v-btn>
        </v-col>
        <canvas id="game" class="canvas"></canvas>
        <v-col class="canvas2">
          <v-row>
            <v-btn id="up" class="up" @click="moveUp">
              Up
            </v-btn>
          </v-row>
          <v-row>
            <v-btn id="left" class="left" @click="moveLeft">
              Left
            </v-btn>
          </v-row>
          <v-row>
            <v-btn id="right" class="right" @click="moveRight">
              right
            </v-btn>
          </v-row>
          <v-row>
            <v-btn id="down" class="down" @click="moveDown">
              down
            </v-btn>
          </v-row>
        </v-col>
      </v-col>
    </v-row>
  </div>

</template>

<style>
@media only screen and (max-width: 1920px) {
  .canvas {
    margin-left: 47rem;
  }

  .canvas1 {
    margin-left: 47.5rem;
  }

  .canvas2 {
    margin-left: 46.2rem;
  }

}

@media only screen and (max-width: 600px) {
  .canvas {
    margin-left: 1rem;
  }

  .canvas1 {
    margin-left: 1.5rem;
  }

  .canvas2 {
    margin-left: 1rem;
  }

}

.up {
  left: 7.5rem;
}
.down {
  bottom: 2rem;
  left: 7rem;
}
.right {
  bottom: 2.1rem;
  left: 12.5rem;
}
.left {
  left: 2rem;
}

</style>

<script>
export default {
  name: 'snakeGame',
  data() {
    return {
      screen: window.innerWidth,
      game: null,
      status: false,
      gameOver: false,
      timer: null,
      score: "0",
      canvas: {
        context: null,
        height: 300,
        width: 300,
        gridSize: 15,
        fillStyle: "gray",
      },
      snake: {
        x: 0,
        y: 0,
        size: 3,
        queue: [],
        fillStyle: "green",
      },
      apple: {
        x: 0,
        y: 0,
        fillStyle: "red",
      },
      move: {
        x: 0,
        y: 0,
      },
    };
  },
  methods: {

    easyGame() {
      this.timerMethod1();
    },
    normalGame() {
      this.timerMethod2();
    },
    hardGame() {
      this.timerMethod3();
    },

    initialize() {
      //valjaku loomine
      this.game.width = this.canvas.width;
      this.game.height = this.canvas.height;
      this.canvas.context = this.game.getContext("2d");
      //ussi ja ouna algus kordinaadid
      this.snake.x = Math.round(this.canvas.width / this.canvas.gridSize / 2);
      this.snake.y = Math.round(this.canvas.height / this.canvas.gridSize / 2);
      this.apple.x = Math.abs(
        Math.round((Math.random() * this.canvas.width) / this.canvas.gridSize) - 5
      );
      this.apple.y = Math.abs(
        Math.round((Math.random() * this.canvas.height) / this.canvas.gridSize) - 5
      );
      //paneb liikumia ja joonistab v'ljaku
      document.addEventListener("keydown", this.buttonsEvent.bind(this));

    },

    timerMethod1() {
      this.timer = setInterval(this.loop, 1000 / 5);
    },
    timerMethod2() {
      this.timer = setInterval(this.loop, 1000 / 10);
    },
    timerMethod3() {
      this.timer = setInterval(this.loop, 1000 / 15);
    },
    loop() {
      this.calculations();
      this.draw();
    },
    calculations() {
      this.snake.x += this.move.x;
      this.snake.y += this.move.y;
      //kaotab kui tabab seina
      if (this.snake.x < 0) {
        clearInterval(this.timer);
        this.gameOver = true;
      } else if (this.snake.x > (this.canvas.width / this.canvas.gridSize) - 1) {
        clearInterval(this.timer);
        this.gameOver = true;
      } else if (this.snake.y < 0) {
        clearInterval(this.timer);
        this.gameOver = true;
      } else if (this.snake.y > (this.canvas.height / this.canvas.gridSize) - 1) {
        clearInterval(this.timer);
        this.gameOver = true;
      }
      //juhul kui tabab ennast siis mang labi
      this.snake.queue.forEach((element) => {
        if (this.snake.x === element.x && this.snake.y === element.y) {
          if (this.status) {
            clearInterval(this.timer);
            this.gameOver = true;
          }
        }
      });

      this.snake.queue.push({
        x: this.snake.x,
        y: this.snake.y,
      });
      //liigtutab keha, et ei tekitaks ila ounata lisa kehasid
      while (this.snake.queue.length > this.snake.size) {
        this.snake.queue.shift();
      }
      //ussi ja ouna kokku satumisel kaob oun, tekib ussile saba juurde ning oun luuakse uues kohas
      if (this.apple.x === this.snake.x && this.apple.y === this.snake.y) {
        this.snake.size++;
        this.score++;

        let appleLocationContol = true;
        while (appleLocationContol) {
          this.apple.x = Math.abs(
            Math.round(
              (Math.random() * this.canvas.width) / this.canvas.gridSize
            )
          );
          this.apple.y = Math.abs(
            Math.round(
              (Math.random() * this.canvas.height) / this.canvas.gridSize
            )
          );

          appleLocationContol = false;
        }
      }
    }, //taidab varviga ala
    draw() {
      this.canvas.context.fillStyle = this.canvas.fillStyle;
      this.canvas.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

      if (this.gameOver) {
        this.canvas.context.fillStyle = "rgba(255, 255, 255, 0.2)";
        this.canvas.context.font = this.canvas.width / 10 + "px Arial";
        this.canvas.context.fillText(
          "GAME OVER",
          this.canvas.width / 5,
          this.canvas.height / 3.5
        );
      }

      if (!this.status) {
        this.canvas.context.fillStyle = "rgba(255, 255, 255, 0.2)";
        this.canvas.context.font = this.canvas.width / 12 + "px Arial";
        this.canvas.context.fillText(
          "Press arrow to start",
          this.canvas.width / 6,
          this.canvas.height / 3.5
        );
      }

      if (this.score) {
        this.canvas.context.fillStyle = "rgba(255, 255, 255, 0.2)";
        this.canvas.context.font = this.canvas.width / 2 + "px Arial";
        if (this.score > 9)
          this.canvas.context.fillText(
            this.score,
            this.canvas.width / 4,
            this.canvas.height / 1.45
          );
        else
          this.canvas.context.fillText(
            this.score,
            this.canvas.width / 2.6,
            this.canvas.height / 1.45
          );
      }


      //taidab varviga ussi
      this.snake.queue.forEach((element, index) => {
        this.canvas.context.fillStyle = this.snake.fillStyle;
        this.canvas.context.fillRect(
          element.x * this.canvas.gridSize,
          element.y * this.canvas.gridSize,
          this.canvas.gridSize,
          this.canvas.gridSize
        );
      });
      //taidab varviga ouna
      this.canvas.context.fillStyle = this.apple.fillStyle;
      this.canvas.context.fillRect(
        this.apple.x * this.canvas.gridSize,
        this.apple.y * this.canvas.gridSize,
        this.canvas.gridSize,
        this.canvas.gridSize
      );
    },

    moveLeft() {
      this.status = true;
      this.move.x = -1;
      this.move.y = 0;
    },
    moveUp() {
      this.status = true;
      this.move.x = 0;
      this.move.y = -1;
    },
    moveRight() {
      this.status = true;
      this.move.x = 1;
      this.move.y = 0;
    },
    moveDown() {
      this.status = true;
      this.move.x = 0;
      this.move.y = 1;
    },
    //noole vajutuse peale paneb ussi liikuma
    buttonsEvent(e) {
      if (e.keyCode > 36)
        if (e.keyCode < 40)
          this.status = true;
      if (e.keyCode === 37) {
        this.move.x = -1;
        this.move.y = 0;
      } else if (e.keyCode === 38) {
        this.move.x = 0;
        this.move.y = -1;
      } else if (e.keyCode === 39) {
        this.move.x = 1;
        this.move.y = 0;
      } else if (e.keyCode === 40) {
        this.move.x = 0;
        this.move.y = 1;
      }
    },
  },
  mounted() {
    this.game = document.getElementById("game");
    this.initialize();
  },
};
</script>

<style>
.canvas {}
</style>