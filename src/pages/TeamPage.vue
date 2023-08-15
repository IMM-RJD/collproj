<template>
  <q-page padding class="q-mx-md">
    <!-- content -->
    <h4 class="q-my-lg">{{ $t('team_headline') }}</h4>

    <person-component :persons="persons"></person-component>
  </q-page>
</template>

<script lang="ts">
import { Person } from 'components/models';
import PersonComponent from 'components/PersonComponent.vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'TeamPage',
  components: { PersonComponent },
  setup() {
    const persons = ref<Person[]>([
      /**
       * TODO:
       * - wrap personComp in skeleton (+testing slow bandwidth)
       * - diff font-size (acc) - alles in rem und dann einfach --calc mit einer variable
       * - themeing
       */

      {
        id: 0,
        imgSrc: 'src/assets/team/jes-man.jpg',
        imgAlt: 'Kollektivkopf Jessica Mans',
        imgPosition: '50% 0%',
        funkyStyles: true,
        firstName: 'Jessica',
        lastName: 'Mans',
        role: {
          de: 'Organisatorin und performative Lichtkünstlerin',
          en: 'Organizer and performative light artist',
        },
        description: {
          de: 'Als Head des Kollektivs sprudelt sie vor Ideen und ist ein begeisterungsfähiger Wirbelwind. Ihren Abschluss B. A. absolvierte sie mit dem Schwerpunkt Modedesign und verknüpft ihre Liebe zum Kostüm und Theater mit ihren Bühnenshows unter dem Künstlernamen Lady Lightflow. Sie war bereits zwei Mal mit unterschiedlichen Konzepten bei der Illuminale vertreten. Voller Tatendrang und Herzblut begeistert sie die Außenwelt für neue Projekte. \n\n„Den Mutigen gehört die Welt.“',
          en: 'As the head of the collective, she is bubbling over with ideas and is an enthusiastic whirlwind. She graduated with a B.A. in fashion design and combines her love of costume and theater with her stage shows under the stage name Lady Lightflow. She has already performed twice at the Illuminale with different concepts. Full of drive and heart she inspires the outside world for new projects. \n\n "The brave own the world."',
        },
        phone: '0152 363 748 04',
        email: 'anfragen@kollektivmehrklang.de',
        homepage: 'http://www.ladylightflow.com',
        homepageText: 'ladylightflow.com',
        facebook: 'ladylightflow',
        instagram: 'ladylacelatex',
        socialOrder: 'instagram, facebook',
      },
      {
        id: 1,
        imgSrc: 'src/assets/team/seb-gro.jpg',
        funkyStyles: true,
        firstName: 'Sebastian',
        lastName: 'Groll',
        role: { de: 'IT & Sound', en: 'IT & Sound' },
        description: {
          de: 'Technikaffin, audiophil und begeisterungsfähig unterstützt er das Kollektiv durch Rat und Tat. Die Pflege der Webseite, das Abmixen von Sets sowie elektronische Live-Performances sind dabei sein Hauptmetier. Mit Freude bringt er sich auch auf vielfältige Art und Weise in die unterschiedlichsten Aufgaben ein. \n\n"Es ist meistens ein guter Tag zum tanzen."',
          en: 'Tech-savvy, audiophile and enthusiastic, he supports the collective in word and deed. The maintenance of the website, the mixing of sets and electronic live performances are his main tasks. He also enjoys getting involved in a wide variety of tasks in many different ways. \n\n "It is usually a good day for dancing."',
        },
        email: 'real_jane_doe@gmx.de',
        youtube: 'channel/UCf1CouiM7wRwDrROYltYDYA',
        soundcloud: 'improvisingmusicmachines',
        github: 'IMM-RJD',
        bandcamp: 'immmusic3',
        instagram: 'imm_radio.feurgerson1337',
        socialOrder: 'youtube, soundcloud, github, bandcamp, instagram',
      },
      {
        id: 2,
        imgSrc: 'src/assets/team/fran-leh.jpg',
        imgPosition: '50% 0%',
        funkyStyles: true,
        firstName: 'Franziska',
        lastName: 'Lehmann',
        role: {
          de: 'Studierende der Psychologie (B. Sc.), Sozialassistentin',
          en: 'Psychology student (B. Sc.), social assistant',
        },
        description: {
          de: 'Franziska kommt ursprünglich aus Thüringen und durfte dort Erfahrungen in sozio-kulturellen und ökologischen Projekten sammeln. Neben ihrem Studium lässt sie sich für kreative Aktionen begeistern und träumt von Räumen, die achtsame Begegnung und herzlichen Austausch ermöglichen. \n\n„Es heißt, dass alles, was wir wirklich suchen, uns seinerseits schon seit Ewigkeiten sucht und dass es uns findet, wenn wir nur ein Weilchen innehalten können.“',
          en: 'Franziska originally comes from Thuringia and was allowed to gain experience in socio-cultural and ecological projects there. Besides her studies, she is inspired by creative actions and dreams of spaces that enable mindful encounters and heartfelt exchange. \n\n "It is said that everything we are really looking for has in turn been looking for us for ages and that it will find us if we can just pause for a while."',
        },
      },
      {
        id: 3,
        imgSrc: 'src/assets/team/irene.jpeg',
        imgPosition: '50% 40%',
        funkyStyles: true,
        firstName: 'Irene',
        lastName: 'Lichtenwald',
        role: { de: 'Makeup-Artist', en: 'Makeup-Artist' },
        description: {
          de: 'Unsere Makeup-Zauberfrau hat schon viele Male ihre Pinsel geschwungen und bis zu fünf Darstellerinnen an einem Tag verwandelt. Bei den Trierer Unterwelten 2022 war sie mit von der Partie, sowie bei der Illuminale 2021. \n\n"If you look for the light, you can often find it. But if you look for the dark, that is all you will ever see."',
          en: 'Our makeup magician has already swung her brushes many times and transformed up to five performers in one day. She was part of the Trier Underworlds 2022 and the Illuminale 2021. \n\n "If you look for the light, you can often find it. But if you look for the dark, that is all you will ever see."',
        },
        instagram: 'http_manray',
        socialOrder: 'instagram',
      },
      {
        id: 4,
        imgSrc: 'src/assets/team/monika.jpeg',
        imgPosition: '50% 40%',
        funkyStyles: true,
        firstName: 'Monika ',
        lastName: 'Tapiador',
        role: { de: 'Model und Darstellerin', en: 'Model and performer' },
        description: {
          de: 'Mit ihrer langjährigen Erfahrung als nebenberufliches Fotomodell so wie in den Bereichen Schauspiel, Theater und Tanz bringt sie sich sowohl konstruktiv über Skript und Choreo, als auch performativ ein - mit dem Ziel, das Kollektiv Geschichten erzählen zu lassen. \nFür die Trierer Unterwelten 2022 war sie mit 15 Auftritten fester Bestandteil des Mehrklang Tanztheater-Ensembles. \n\n "Durch das Spiel wird die Phantasie zur erlebten Wirklichkeit. Für den Spielenden ein weiteres Leben - für den Betrachter eine Illusion von der er sich mitreißen lassen kann.“',
          en: 'With her many years of experience as a part-time model as well as in the fields of acting, theater and dance, she contributes constructively via script and choreo as well as performatively - with the goal of letting the collective tell stories. \n For the Trier Underworlds 2022, she was an integral part of the Mehrklang Tanztheater ensemble with 15 performances. \n\n "Through play, fantasy becomes experienced reality. For the performer, another life - for the viewer, an illusion to be carried away by."',
        },
        email: 'booking@monika-tapiador.com',
        instagram: 'monikatapiador',
        socialOrder: 'instagram',
      },
      {
        id: 5,
        imgSrc: 'src/assets/team/sam-pet.jpg',
        imgPosition: '50% 0%',
        funkyStyles: true,
        firstName: 'Samira',
        lastName: 'Petry',
        role: {
          de: 'Studentin der Sozialpädagogik B. A., Schwerpunkt Kinder- und Jugendarbeit und soziale Gruppenarbeit',
          en: 'Student of social pedagogy B. A., focus on child and youth work and social group work',
        },
        description: {
          de: 'Samira lässt mit ihrer mehrjährigen theoretischen und praktischen Erfahrung in sozialpädagogischer und kreativer Projektarbeit und ihrem kinderfreundlichen sowie empathischen Wesen die Augen und Herzen der Kinder mit Freude erblühen. Egal ob beim Modellierballons zaubern, Basteln, Malen, Kinderschminken oder interaktiven erlebnispädagogischen Rollenspielen: Für Jeden ist etwas dabei. Die soziale Gruppenarbeit und Kinderbetreuung unterschiedlicher Gruppenformen ist ihre Expertise. \n\n„Kinder sind keine Fässer, die gefüllt, sondern Feuer, die entzündet werden wollen.“',
          en: 'With her many years of theoretical and practical experience in socio-pedagogical and creative project work and her child-friendly as well as empathetic nature, Samira makes the childrens eyes and hearts blossom with joy. No matter if it\'s modeling balloons, handicrafts, painting, face painting or interactive role-playing: There is something for everyone. The social group work and child care of different group forms is her expertise. \n\n "Children are not barrels to be filled, but fires to be lit."',
        },
      },
      // {
      //   id: 3,
      //   imgSrc: 'src/assets/team/persona-dummy.png',
      //   imgPosition: '50% 0%',
      //   funkyStyles: true,
      //   firstName: 'Sarah',
      //   lastName: 'Kowatsch',
      //   role: {de: 'M.A. Kommunikationsdesign, Flyer und Printmediengestaltung/soziale Medien', en: 'role en'
      //   description: {
      //     de: 'Unser Genie in Sachen Printmedien und social Network…? Ihre Professionalität steckt sie liebevolle in all ihre Gestaltungen, was man sehen und spüren kann.',
      //     en: 'insert english description here',
      //   },
      //   phone: '',
      //   email: '',
      // },
      {
        id: 6,
        imgSrc: 'src/assets/team/cla-sch.jpg',
        imgPosition: '50% 49%',
        funkyStyles: true,
        firstName: 'Clara',
        lastName: 'Schiffmann',
        role: {
          de: 'Raumgestaltung/Dekoration und Bühnenbild',
          en: 'Interior design/decoration and stage setting',
        },
        description: {
          de: 'Schon bei vielen Events in und um die Trierer Region konnte man die verzückenden Dekorationen von unserer Frau für die Bühnen- und Raumgestaltung bewundern. Sie belebt Stoffe und Naturmaterialien mit neuem Flair und schafft so neue Zauberwelten. \n\n"Der krumme Baum lebt sein Leben, der gerade Baum wird ein Brett."',
          en: 'Already at many events in and around the Trier region you could admire the enchanting decorations of our woman for the stage and room design. She revives fabrics and natural materials with new flair and creates new magic worlds. \n\n "The crooked tree lives its life, the straight tree becomes a board."',
        },
      },
      {
        id: 7,
        imgSrc: 'src/assets/team/isa-mul.jpg',
        imgPosition: '50% 0%',
        funkyStyles: true,
        firstName: 'Isabell',
        lastName: 'Müller',
        role: {
          de: 'Grundschullehrerin, ausgebildeter 4-Elemente-Coach',
          en: 'Elementary school teacher, trained 4-Elements-Coach',
        },
        description: {
          de: 'Achtsam und empathisch begleitet sie gerade ihre Viertklässler in Lernprozessen auf dem Weg zur weiterführenden Schule. Ihre Vision ist es, Mädchen und Frauen in ihre innewohnende Kraft zu bringen, um sich selbst zu erkennen und zu verwirklichen. Behilflich sind ihr dabei Elemente aus dem NLP, der Trance und dem Familienstellen. \n\n„Sei realistisch. Plane Wunder ein.“',
          en: 'She attentively and empathically accompanies her fourth graders in particular in learning processes on their way to secondary school. Her vision is to bring girls and women into their inherent power to recognize and realize themselves. She is assisted by elements from NLP, trance and family constellations. \n "Be realistic. Plan for miracles."',
        },
      },
    ]);
    return { persons };
  },
});
</script>
