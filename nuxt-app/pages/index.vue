import i18n from '../plugins/i18n.ts'
<template>
  <div>
    <v-row>
      <v-col sm="12" xs="12" md="6" lg="6" xl="6" xxl="6" class="introDescription pa-2 ma-2">
        <v-row>
          <span class="title pa-3">{{ $t('introduction.title') }}</span>
        </v-row>
        <v-row>
          <span class="subTitle pa-2 ma-2">{{ $t('introduction.subtitle1') }}</span>
        </v-row>
        <v-row>
          <span class="subTitle pa-2 ma-2">{{ $t('introduction.subtitle2') }} <v-btn prepend-icon="mdi mdi-github" size="large" variant="outlined" href="https://github.com/SergeiGrjadov/Demo-page.git">GitHub</v-btn></span>
        </v-row>
      </v-col>
      <v-col >
          <v-avatar class="pcFace" size="490" justify="center">
            <img src="../assets/img/sergei.jpg">
          </v-avatar>
          <v-row justify="center">
          <v-avatar class="phoneFace" size="200">
            <img class="phoneFace" src="../assets/img/sergei1.jpg">
          </v-avatar>
        </v-row >
        </v-col>
    </v-row>

    <v-row class="pa-6" justify="center">
      <v-btn prepend-icon="mdi mdi-phone" class="contactBtn" variant="outlined" href="tel:58205405"> 582<span
          hidden>i</span>05405</v-btn>

      <v-btn prepend-icon="mdi mdi-email-outline" class="contactBtn" variant="outlined"
        href="mail-to:sergeigrjadov645@gmail.com">sergeigrjad<span hidden>i</span>ov645@gmail.com</v-btn>

      <v-btn prepend-icon="mdi mdi-skype" class="contactBtn" variant="outlined"
        href="https://join.skype.com/invite/HyAdOLFbRtm6">Skype</v-btn>
      
      <v-btn class="ma-1" prepend-icon="mdi mdi-city" variant="outlined"> Tallinn/Harjumaa</v-btn>
    </v-row>
    <v-row class="pa-2 ma-2">
      <v-col sm="12" xs="12" md="6" lg="6" xxl="6">
        <v-row class="pa-2 ma-2">
          <v-expansion-panels flat v-model="panel">
            <v-expansion-panel class="panel">
              <v-expansion-panel-title class="innerBoxOpen">
                {{ $t('education.education') }}
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <li v-for="education in educations">
                  {{ education.name }}
                  {{ education.age }}
                  <br>
                  <span class="eriala">{{ education.variant }}</span>

                </li>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-row>
        <v-row class="pa-2 ma-2">
          <v-expansion-panels flat v-model="panel3">
            <v-expansion-panel class="panel">
              <v-expansion-panel-title class="innerBoxOpen">{{ $t('work.work') }}</v-expansion-panel-title>
              <v-expansion-panel-text>
                {{ $t('work.info') }}
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>

        </v-row>
      </v-col>
      <v-col sm="12" xs="12" md="6" lg="6" xxl="6">
        <v-row class="pa-2 ma-2">

          <v-expansion-panels  flat v-model="panel4">
            <v-expansion-panel class="panel">
              <v-expansion-panel-title class="innerBoxOpen">
                {{ $t('skills.skills') }}
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <v-chip class="skills" v-for="skill in skills" :key="skill.text_key">
                  {{ $t(skill.text_key) }}
                </v-chip>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>

        </v-row>
        <v-row class="pa-2 ma-2">
          <v-expansion-panels flat v-model="panel1">
            <v-expansion-panel class="panel">
              <v-expansion-panel-title class="innerBoxOpen">{{ $t('hobbies.hobbies') }}</v-expansion-panel-title>
              <v-expansion-panel-text>
                <span v-for="hobby in hobbies" :key="hobby.text_key">
                  {{ $t(hobby.text_key) }}
                </span>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-row>
        <v-row class="pa-2 ma-2">
          <v-expansion-panels flat v-model="panel5">
            <v-expansion-panel class="panel">
              <v-expansion-panel-title class="innerBoxOpen">{{ $t('computerSkills.computer') }}</v-expansion-panel-title>
              <v-expansion-panel-text>
                <span v-for="proLanguage in programLanguages">
                  {{ proLanguage.value }}
                </span>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-row>
        <v-row class="pa-2 ma-2">
          <v-expansion-panels flat v-model="panel2">
            <v-expansion-panel class="panel">
              <v-expansion-panel-title class="innerBoxOpen">{{ $t('languages.languages') }}</v-expansion-panel-title>
              <v-expansion-panel-text>
                <span>{{ $t('languages.estonia') }}</span>
                <div>&#9899; &#9899; &#9899; &#9899; &#9898; </div>
                <span>{{ $t('languages.english') }}</span>
                <div>&#9899; &#9899; &#9899; &#9899; &#9898; </div>
                <span>{{ $t('languages.russian') }}</span>
                <div>&#9899; &#9899; &#9899; &#9899; &#9898; </div>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-row>
      </v-col>
    </v-row>
    <ContactUs/>
  </div>
</template>
<style>
@media only screen and (max-width: 1980px){
.title {
  font-size: 4rem;
  font-weight: bold;
}

.panel{
  background-color: rgb(202, 190, 55);
  }

.subTitle {
  font-size: 2rem;
  font-weight: bold;
}

.eriala{
  margin-left: 1rem;
  font-size:medium;
}

.skills {
  margin-top: 1rem;
  margin-left: 1rem
}

.contactBtn {
  margin: 4px;
}

.phoneFace{
    display: none;
  }
}
</style>
<style>
@media only screen and (max-width: 600px) {
  .pcFace{
    display: none;
  }

  .phoneFace {
    display:flex;
  }

  .boxOpen {
    margin-top: 1rem;
  }

  .innerBoxOpen {
    height: 4rem;
  }

  .contactBar {
    margin-bottom: 4rem;
    margin-top: 12rem;
    border: 1px solid black;
    height: 3rem;
    line-height: 3rem;
  }


  #body {
    background-color: rgba(253, 236, 67, 255);
  }
}

@media screen and (max-width: 600px) {
  
  .pcFace {
    display: none;
  }


  .container {
    margin-top: 2rem;
    border-bottom: 1px solid black;
  }

  .boxOpen {
    margin-top: 1rem;
  }

  .innerBoxOpen {
    height: 4rem;
  }

  .emailBox {
    margin-bottom: -7rem;
  }

  .contactBar {
    margin-bottom: 4rem;
    margin-top: 4rem;
    border: 1px solid black;
    height: 3rem;
    line-height: 3rem;
  }

}
</style>

<script>
import mainTextBoxList from '@/components/MainPageTextBox'
import emailjs from 'emailjs-com'
import contactUS from '../components/ContactUs.vue'

export default {
  data: () => ({

    hobbies: [{
      text_key: "hobbies.basketball",
    },
    {
      text_key: "hobbies.program",
    },
    {
      text_key: "hobbies.computergames",
    },
    {
      text_key: "hobbies.tablegamse",
    },
    ],


    programLanguages: [{
      value: 'JavaScript, ',
    },
    {
      value: 'React,',
    },
    {
      value: 'Angular,',
    },
    {
      value: 'Vue,',
    },
    {
      value: 'Vuetify, ',
    },
    {
      value: 'Spring boot, ',
    },
    {
      value: 'Postgre, ',
    },
    {
      value: 'Rest, ',
    },
    {
      value: 'Laravel, ',
    },
    {
      value: 'MS Office, ',
    },
    {
      value: 'Java, ',
    },
    {
      value: 'HTML, ',
    },
    {
      value: 'CSS, ',
    },
    {
      value: 'Python, ',
    },
    {
      value: 'SQL, ',
    },
    {
      value: 'MySQL, ',
    }
    ],

    skills: [{
      text_key: "skills.program",
    },
    {
      text_key: "skills.teamwork",
    },
    {
      text_key: "skills.open",
    },
    {
      text_key: "skills.responsible",
    },
    {
      text_key: "skills.high_stress_tolerance",
    },
    {
      text_key: "skills.independent",
    },
    {
      text_key: "skills.listening_skill",
    },
    {
      text_key: "skills.explicit",
    },
    {
      text_key: "skills.critical_thinking",
    },
    {
      text_key: "skills.adaptability",
    },
    {
      text_key: "skills.multitasking",
    },
    {
      text_key: "skills.inventive_approach",
    },
    {
      text_key: "skills.fast_learner",
    },
    {
      text_key: "skills.emotional_intelligence",
    },
    {
      text_key: "skills.eagerness_to_learn",
    },

    ],
    educations: [{
      name: 'Tallinna Polutehnikum',
      age: '2022-202x',
      variant: 'Tarkvara arendaja'
    },
    {
      name: 'Tallinna Mustamäe gümnaasium',
      age: '2019-2021',
      variant: 'Keel- ja reaal suund'
    }
    ],

    panel: 0,
    panel1: 0,
    panel2: 0,
    panel3: 0,
    panel3: 0,
    panel4: 0,
    panel5: 0,

  }
  ),
  name: 'home',
  components: {
    mainTextBoxList,
  },


  
}
</script>
