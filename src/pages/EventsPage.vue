<template>
  <q-page padding class="q-mx-md">
    <!-- content -->
    <h4 class="q-my-lg">Bevorstehende Events</h4>
    <q-img
      width="200px"
      loading="lazy"
      position="-20px 50%"
      src="src/assets/projects/gb/logo.png"
    ></q-img>
    <div style="font-size: 18px; margin-bottom: 10px">
      Projekt "Glücksbringer" vom 25.07. bis 04.09.2022 im
      <a
        href="https://kulturspektrum-trier.de/"
        target="blank"
        class="imm-event-link"
      >
        KULTURSPEKTRUM
      </a>
      - Soziokulturelles Programm mit Workshops und Events.
      <br /><br />
      Liebe Menschen: Wir haben uns entschieden, unsere Kurse und Events über
      Ticket Regional anzubieten. Deshalb kommen noch VVK-Gebühren hinzu. Vielen
      Dank für Euer Verständnis und Euren Support!
      <br />
      <q-btn
        label="Flyer anzeigen"
        color="primary"
        @click="flyer = true"
        style="margin-top: 10px; margin-bottom: 10px; margin-right: 20px"
      />
      <q-btn
        label="zu den Tickets"
        color="primary"
        href="https://www.ticket-regional.de/kollektivmehrklang"
        target="_blank"
        style="margin-top: 10px; margin-bottom: 10px"
      />
    </div>
    <q-dialog v-model="flyer" transition-show="rotate" transition-hide="rotate">
      <q-carousel
        animated
        v-model="slide"
        v-model:fullscreen="fullscreen"
        navigation
        infinite
        class="bg-white shadow-1 rounded-borders"
      >
        <q-carousel-slide :name="1" class="imm-p-0-important">
          <q-img
            width="1633px"
            loading="lazy"
            src="src/assets/projects/gb/flyer_front.jpg"
          ></q-img>
        </q-carousel-slide>
        <q-carousel-slide :name="2" class="imm-p-0-important">
          <q-img
            width="1633px"
            loading="lazy"
            src="src/assets/projects/gb/flyer_back.jpg"
          ></q-img>
        </q-carousel-slide>
        <template v-slot:control>
          <q-carousel-control position="bottom-right" :offset="[18, 18]">
            <q-btn
              push
              round
              dense
              color="white"
              text-color="primary"
              :icon="fullscreen ? 'fullscreen_exit' : 'fullscreen'"
              @click="fullscreen = !fullscreen"
            />
          </q-carousel-control>
        </template>
      </q-carousel>
    </q-dialog>
    <br />
    <event-component
      :events="
        events.filter((event) => {
          // todays and future events
          return date.getDateDiff(event.date, new Date(), 'days') >= 0;
        })
      "
    ></event-component>
    <div class="q-mt-lg" style="font-size: 18px">Vergangene Events</div>
    <q-card-actions class="q-mb-xs">
      <q-space />
      <q-btn
        color="km-timeline"
        round
        :icon="pastEvents ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
        @click="pastEvents = !pastEvents"
      />
      <q-space />
    </q-card-actions>
    <q-slide-transition>
      <div v-show="pastEvents">
        <event-component
          :events="
            // past events
            events.filter((event) => {
              if (date.getDateDiff(event.date, new Date(), 'days') < 0) {
                event.link = undefined;
                event.allowShare = false;
              }
              return date.getDateDiff(event.date, new Date(), 'days') < 0;
            })
          "
        ></event-component>
        <q-card-actions class="q-mt-xs">
          <q-space />
          <q-btn
            color="km-timeline"
            round
            :icon="pastEvents ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
            @click="pastEvents = !pastEvents" />
          <q-space
        /></q-card-actions>
      </div>
    </q-slide-transition>
    <q-separator color="primary" inset spaced="20px" />
    <div style="font-size: 18px">
      <a
        href="https://www.trierer-unterwelten.de/"
        target="blank"
        class="imm-event-link"
      >
        Unterwelten-Festival
      </a>
      vom 28.10. bis 19.11.2022 mit dem Projekt "Schattenwelten und
      Lichtgestalten", je 3 Veranstaltungen pro Woche im Frankenturm Trier -
      Tanztheaterstück plus musikalisches Happening.
    </div>
    <q-page-scroller
      position="bottom-right"
      :scroll-offset="2000"
      :offset="[18, 18]"
    >
      <q-btn fab icon="keyboard_arrow_up" color="km-timeline" />
    </q-page-scroller>
  </q-page>
</template>

<script lang="ts">
import { Event } from 'src/components/models';
import EventComponent from 'components/EventComponent.vue';
import { date } from 'quasar';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'EventsPage',
  components: { EventComponent },
  setup() {
    /**
     * TODO:
     * - reise zu dir selbst eventcard um insta link erweitern (unten bei email)
     */
    const events = ref<Event[]>([
      {
        id: 0,
        imgSrc:
          'src/assets/projects/gb/events/freiesmitaneindertanzenundmusizieren.jpg',
        title: 'FREIES MITEINANDER TANZEN UND MUSIZIEREN (von 3 bis 13 Jahren)',
        date: date.buildDate({
          year: 2022,
          month: 7,
          date: 27,
        }),
        dateText: 'MITTWOCH, 27. JULI 2022 VON 10:00 BIS 13:00',
        link: 'https://www.ticket-regional.de/events_info.php?eventID=189259',
        place: 'Kulturspektrum, Domfreihof 1b, 54290 Trier',
        description:
          'Die Kinder im Alter von 3 bis 13 Jahren gehen auf ihre eigene musikalische Reise, ob mit Instrumenten oder tänzerisch. Es werden verschiedene Klangapparate wie Metallophon, Harfen, Klanghölzer, Gitarre, Keyboard und Rasseln vor Ort sein, auf denen sich ausprobiert werden kann. Dazu wird getanzt und es gibt eine Playlist, die nach Belieben abgespielt werden kann. Es werden viele kleine Pausen eingelegt. Für Kinder im Alter von 3 bis 6 Jahren empfehlen wir die Begleitung durch eine erwachsene Vertrauensperson, die selbstverständlich kostenfrei am Workshop teilnimmt.\n\n' +
          'Liebe Menschen: Wir haben uns entschieden, unsere Kurse und Events über Ticket Regional anzubieten. Deshalb kommen noch VVK-Gebühren hinzu. Vielen Dank für Euer Verständnis und Euren Support!\n\n' +
          'Wir danken unseren Förder:innen:\n KULTURSPEKTRUM\n Stadt Trier\n Kulturstiftung Sparkasse Trier\n Stiftung Rehkids',
        expanded: false,
      },
      {
        id: 1,
        imgSrc: 'src/assets/projects/gb/events/derbewegtemensch.jpg',
        title: 'DER BEWEGTE MENSCH',
        date: date.buildDate({
          year: 2022,
          month: 7,
          date: 28,
        }),
        dateText: 'DONNERSTAG, 28. JULI 2022 VON 17:00 BIS 19:30',
        link: 'https://www.ticket-regional.de/events_info.php?eventID=189260',
        place: 'Kulturspektrum, Domfreihof 1b, 54290 Trier',
        description:
          'In diesem Ausschnitt der Ausbildungsreihe der bewegte Mensch hast du die Chance deinen verborgenen Anteilen näher kommen zu dürfen und dein Potential neu zu entdecken. Körperarbeit und Bewegung geben über uns mehr Aufschluss als es viele Menschen für möglich halten. Denn Bewegung im Außen spiegelt unsere Bewegung im Inneren wie auch umgekehrt. Dieser Kurs bietet dir einen tiefen Einblick in dein Innerstes, damit du für dich lernen kannst, wie du Konflikte in dir löst. Es befähigt dich, Konfliktsituationen in deinem Alltag sowie in deinem Beruf mit deinen Mitmenschen zu erleben und mit Ihnen neu umzugehen. Die hier erlernten Methoden befähigen dich, in einem tieferen Verständnis mit dir und deinen Mitmenschen zu interagieren und zu arbeiten. Es freuen sich auf dich von ganzem Herzen,\n Lisa und Niclas\n\n' +
          'Liebe Menschen: Wir haben uns entschieden, unsere Kurse und Events über Ticket Regional anzubieten. Deshalb kommen noch VVK-Gebühren hinzu. Vielen Dank für Euer Verständnis und Euren Support!\n\n' +
          'Wir danken unseren Förder:innen:\n KULTURSPEKTRUM\n Stadt Trier\n Kulturstiftung Sparkasse Trier\n Stiftung Rehkids\n',
        expanded: false,
      },
      {
        id: 2,
        imgSrc: 'src/assets/projects/gb/events/aeffchenyogafuerdiekleinen.jpg',
        title: 'ÄFFCHENYOGA FÜR DIE KLEINEN (von 6 bis 12 Jahren)',
        date: date.buildDate({
          year: 2022,
          month: 7,
          date: 29,
        }),
        dateText: 'FREITAG, 29. JULI 2022 VON 16:00 BIS 17:30',
        link: 'mailto:anfragen@kollektivmehrklang.de?subject=Verbindliche Anmeldung - Äffchenyoga',
        linkText: '*PWYW* - per Email anmelden',
        place: 'Kulturspektrum, Domfreihof 1b, 54290 Trier',
        description:
          'Der lustige Affe Luka ist auf einer spannenden Reise durch die Welt. Auf seinem Weg trifft er viele verschiedene Tierfreunde, die ihm etwas Gutes tun und dabei helfen seinen Körper zu spüren. In Form einer lustigen Tierfabel werden die Kinder an erste Yogaübungen herangeführt. In achtsamer Weise wird der Körper gedehnt und gekräftigt. \n Keinerlei Vorkenntnisse notwendig. Wenn vorhanden bitte Matte mitbringen. Bitte bei der Anmeldung angeben. \n\n' +
          'Der Workshop finanziert sich nach dem „Pay-what-you-want“-Prinzip. Du kannst am Ende des Workshops selbst entscheiden, was er dir wert ist. Wir empfehlen einen Betrag von 15 Euro.\n\n' +
          'Für die verbindliche Anmeldung zum Workshop, bitte eine E-Mail an anfragen@kollektivmehrklang.de schicken.\n\n' +
          'Wir danken unseren Förder:innen:\n KULTURSPEKTRUM\n Stadt Trier\n Kulturstiftung Sparkasse Trier\n Stiftung Rehkids\n',
        expanded: false,
      },
      {
        id: 3,
        imgSrc: 'src/assets/projects/gb/events/alternativeliebeskonzepte.jpg',
        title: 'ALTERNATIVE LIEBESKONZEPTE (ab 14 Jahren)',
        date: date.buildDate({
          year: 2022,
          month: 7,
          date: 29,
        }),
        dateText: 'FREITAG, 29. JULI 2022 VON 18:30 BIS 20:30',
        link: 'https://www.ticket-regional.de/events_info.php?eventID=189261',
        place: 'Kulturspektrum, Domfreihof 1b, 54290 Trier',
        description:
          'Marie und Simon teilen ihre Beziehungserfahrungen und geben dir alternative Perspektiven zur vorherrschenden heteronormativen Monogamie. Was bedeuten Begriffe wie Polyamorie, Ethical Sluthood oder Beziehungsanarchie? Wir gehen mit dir auf eine Reise in extravagante zwischenmenschliche Gefilde, besonders interessant für Menschen, die ihre Bedürfnisse neu definieren wollen.\n\n' +
          'Liebe Menschen: Wir haben uns entschieden, unsere Kurse und Events über Ticket Regional anzubieten. Deshalb kommen noch VVK-Gebühren hinzu. Vielen Dank für Euer Verständnis und Euren Support!\n\n' +
          'Wir danken unseren Förder:innen:\n KULTURSPEKTRUM\n Stadt Trier\n Kulturstiftung Sparkasse Trier\n Stiftung Rehkids\n',
        expanded: false,
      },
      {
        id: 4,
        imgSrc: 'src/assets/projects/gb/events/duftreise.jpg',
        title: 'DUFTREISE - WIR MACHEN PEELING (ab 7 Jahren)',
        date: date.buildDate({
          year: 2022,
          month: 8,
          date: 1,
        }),
        dateText: 'MONTAG, 1. AUGUST 2022 VON 10:00 BIS 12:00',
        link: 'https://www.ticket-regional.de/events_info.php?eventID=189263',
        place: 'Kulturspektrum, Domfreihof 1b, 54290 Trier',
        description:
          'Mit ätherischen Ölen auf Naturbasis, Kräutern und anderen natürlichen Stoffen stellen wir eigene Naturkosmetik her. Es entsteht ein Peeling, welches mit wunderbaren Düften oder Kräutern verfeinert wird. Es wird für jeden individuellen Geschmack das passende Aroma zu finden sein. Ein Workshop für alle Sinne, für alle Menschen. \n Wer möchte kann gern ein hübsches Einweckglas oder ein Glas mit Deckel eurer Wahl zum Verschließen mitbringen, ist aber kein Muss.\n\n' +
          'Liebe Menschen: Wir haben uns entschieden, unsere Kurse und Events über Ticket Regional anzubieten. Deshalb kommen noch VVK-Gebühren hinzu. Vielen Dank für Euer Verständnis und Euren Support!\n\n' +
          'Wir danken unseren Förder:innen:\n KULTURSPEKTRUM\n Stadt Trier\n Kulturstiftung Sparkasse Trier\n Stiftung Rehkids\n',
        expanded: false,
      },
      {
        id: 5,
        imgSrc: 'src/assets/projects/gb/events/mobiles.jpg',
        title: 'WIR KREIEREN MOBILES (ab 7 Jahren)',
        date: date.buildDate({
          year: 2022,
          month: 8,
          date: 2,
        }),
        dateText: 'DIENSTAG, 2. AUGUST 2022 VON 10:00 BIS 13:00',
        link: 'https://www.ticket-regional.de/events_info.php?eventID=189264',
        place: 'Kulturspektrum, Domfreihof 1b, 54290 Trier',
        description:
          'Wir kreieren Mobiles! Die beweglichen Gebilde werden an Ästen in den Raum gehängt und lassen eure Glücksbringer in der Luft schweben. Dabei sind der Kreativität keine Grenzen gesetzt: Muscheln, Steine, Federn, Murmeln oder kleine Figuren – alles kann in Draht eingefasst und befestigt werden. Habt ihr kleine Kostbarkeiten, die ihr euch gern ins Zimmer hängen wollt? Bringt alles mit zum Mobile-Basteln!\n\n' +
          'Liebe Menschen: Wir haben uns entschieden, unsere Kurse und Events über Ticket Regional anzubieten. Deshalb kommen noch VVK-Gebühren hinzu. Vielen Dank für Euer Verständnis und Euren Support!\n\n' +
          'Wir danken unseren Förder:innen:\n KULTURSPEKTRUM\n Stadt Trier\n Kulturstiftung Sparkasse Trier\n Stiftung Rehkids\n',
        expanded: false,
      },
      {
        id: 6,
        imgSrc: 'src/assets/projects/gb/events/womencircle.jpg',
        title: 'FEMININE SPIRITS - WOMENCIRCLE',
        date: date.buildDate({
          year: 2022,
          month: 8,
          date: 3,
        }),
        dateText: 'MITTWOCH, 3. AUGUST 2022 VON 14:00 BIS 18:00',
        link: 'https://www.ticket-regional.de/events_info.php?eventID=189284',
        place: 'Kulturspektrum, Domfreihof 1b, 54290 Trier',
        description:
          '„Träume dir dein Leben schön und mache aus diesen Träumen eine Realität.“ Inspiriert von diesem Satz, den einst Marie Curie aussprach, darfst du in diesem Kurs mit Hilfe geführter Meditation und kreativem Gestalten in deine persönliche Kraft und deine Weiblichkeit finden.\n\n' +
          'Liebe Menschen: Wir haben uns entschieden, unsere Kurse und Events über Ticket Regional anzubieten. Deshalb kommen noch VVK-Gebühren hinzu. Vielen Dank für Euer Verständnis und Euren Support!\n\n' +
          'Wir danken unseren Förder:innen:\n KULTURSPEKTRUM\n Stadt Trier\n Kulturstiftung Sparkasse Trier\n Stiftung Rehkids\n',
        expanded: false,
      },
      {
        id: 7,
        imgSrc: 'src/assets/projects/gb/events/gewaltfreiekommunikation.jpg',
        title: 'GEWALTFREIE KOMMUNIKATION (ab 16 Jahren)',
        date: date.buildDate({
          year: 2022,
          month: 8,
          date: 4,
        }),
        dateText: 'DONNERSTAG, 4. AUGUST 2022 VON 13:00 BIS 16:30',
        link: 'mailto:anfragen@kollektivmehrklang.de?subject=Verbindliche Anmeldung - Gewaltfreie Kommunikation',
        linkText: '*PWYW* - per Email anmelden',
        place: 'Kulturspektrum, Domfreihof 1b, 54290 Trier',
        description:
          'Gemeinsam Konflikte lösen, anstatt zur Eskalation beizutragen! Konstruktive Lösungen suchen, anstatt emotionale Wunden zu hinterlassen. Gewaltfreie oder auch achtsame Kommunikation hilft dir in deinem Alltag dabei zwischenmenschliche Konflikte anzugehen und dabei mit all deinen Bedürfnissen und Gefühlen gehört zu werden. Du lernst dich auszudrücken und richtig zuzuhören. \n\n' +
          'Der Workshop finanziert sich nach dem „Pay-what-you-want“-Prinzip. Du kannst am Ende des Workshops selbst entscheiden, was er dir wert ist. Wir empfehlen einen Betrag zwischen 10 Euro und 30 Euro.\n\n' +
          'Für die verbindliche Anmeldung zum Workshop, bitte eine E-Mail an anfragen@kollektivmehrklang.de schicken.\n\n' +
          'Wir danken unseren Förder:innen:\n KULTURSPEKTRUM\n Stadt Trier\n Kulturstiftung Sparkasse Trier\n Stiftung Rehkids\n',
        expanded: false,
      },
      {
        id: 8,
        imgSrc: 'src/assets/projects/gb/events/monotypie.jpg',
        title: 'MONOTYPIE - EINFACHE DRUCKTECHNIK (ab 13 Jahren)',
        date: date.buildDate({
          year: 2022,
          month: 8,
          date: 6,
        }),
        dateText: 'SAMSTAG, 6. AUGUST 2022 VON 10:00 BIS 13:00',
        link: 'https://www.ticket-regional.de/events_info.php?eventID=189291',
        place: 'Kulturspektrum, Domfreihof 1b, 54290 Trier',
        description:
          'Monotypie ist ein Einmal-Druckverfahren. Es kann ein gegenseitiges Portrait, eine Landschaft oder ein abstraktes Bild entstehen. Es kann immer wieder nachgedruckt werden, aber es ist ein einmaliges Unikat, was im Verlauf entsteht. \n Eine glatte Fläche wird mit einer dünnen Druckfarbe eingerollt, \n Papier wird darübergelegt und wird anschließend rückseitig "blind" gedruckt oder gezeichnet. Dadurch entsteht immer auch ein kleines Zufallsbild, mit dem stetig weitergearbeitet werden kann. \n\n' +
          'Liebe Menschen: Wir haben uns entschieden, unsere Kurse und Events über Ticket Regional anzubieten. Deshalb kommen noch VVK-Gebühren hinzu. Vielen Dank für Euer Verständnis und Euren Support!\n\n' +
          'Wir danken unseren Förder:innen:\n KULTURSPEKTRUM\n Stadt Trier\n Kulturstiftung Sparkasse Trier\n Stiftung Rehkids\n',
        expanded: false,
      },
      {
        id: 9,
        imgSrc: 'src/assets/projects/gb/events/tanzdichfrei.jpg',
        title: 'DIE REISE ZU DIR SELBST - TANZ DICH FREI',
        date: date.buildDate({
          year: 2022,
          month: 8,
          date: 7,
        }),
        dateText: 'SONNTAG, 7. AUGUST 2022 VON 15:00 BIS 17:00',
        link: 'mailto:anfragen@kollektivmehrklang.de?subject=Verbindliche Anmeldung - Die Reise zu dir selbst - tanz dich frei',
        linkText: '*PWYW* - per Email anmelden',
        place: 'Kulturspektrum, Domfreihof 1b, 54290 Trier',
        description:
          'Durch Tanz zu deinem inneren Kind. \n Wenn du dich in letzter Zeit ausgelaugt fühlst, ist dieser Workshop genau das Richtige für dich. Durch das improvisierte Tanzen lernst du dich selbst und deine Bedürfnisse besser kennen. Dabei geht es um Bewegungen, die dir guttun, wobei du selbst entscheidest, wie diese aussehen sollen. \n Keine Vorkenntnisse nötig. \n Kursleiterin auf Insta: landinyourself \n\n' +
          'Der Workshop finanziert sich nach dem „Pay-what-you-want“-Prinzip. Du kannst am Ende des Workshops selbst entscheiden, was er dir wert ist. Wir empfehlen einen Betrag zwischen 10 Euro und 20 Euro.\n\n' +
          'Für die verbindliche Anmeldung zum Workshop, bitte eine E-Mail an anfragen@kollektivmehrklang.de schicken.\n\n' +
          'Wir danken unseren Förder:innen:\n KULTURSPEKTRUM\n Stadt Trier\n Kulturstiftung Sparkasse Trier\n Stiftung Rehkids\n',
        expanded: false,
      },
      {
        id: 10,
        imgSrc: 'src/assets/projects/gb/events/kopfschmuck.jpg',
        title: 'WIR KREIEREN KOPFSCHMUCK (ab 7 Jahren)',
        date: date.buildDate({
          year: 2022,
          month: 8,
          date: 8,
        }),
        dateText: 'MONTAG, 8. AUGUST 2022 VON 10:00 BIS 13:00',
        link: 'https://www.ticket-regional.de/events_info.php?eventID=189292',
        place: 'Kulturspektrum, Domfreihof 1b, 54290 Trier',
        description:
          'Ob für eine Party, als Schmuck für jeden Tag oder als Geschenk für deine Lieben: hier entstehen kleine Kunstwerke in Form von Haarreifen oder -Spangen, die aus konservierten Trockenblumen und Draht gefertigt werden. \n Keinerlei Vorkenntnisse nötig, Materialien in verschiedenen Farben und Ausführungen vorhanden. \n\n' +
          'Liebe Menschen: Wir haben uns entschieden, unsere Kurse und Events über Ticket Regional anzubieten. Deshalb kommen noch VVK-Gebühren hinzu. Vielen Dank für Euer Verständnis und Euren Support!\n\n' +
          'Wir danken unseren Förder:innen:\n KULTURSPEKTRUM\n Stadt Trier\n Kulturstiftung Sparkasse Trier\n Stiftung Rehkids\n',
        expanded: false,
      },
      {
        id: 11,
        imgSrc: 'src/assets/projects/gb/events/duftreise_senioren.jpg',
        imgContainerWidth: '176px',
        title: 'DUFTREISE - WIR MACHEN PEELING (FÜR SENIOREN)',
        date: date.buildDate({
          year: 2022,
          month: 8,
          date: 9,
        }),
        dateText: 'DIENSTAG, 9. AUGUST 2022 VON 10:00 BIS 12:00',
        link: 'mailto:kontakt@seniorenbuero-trier.de?subject=Verbindliche Anmeldung - Duftreise - wir machen Peeling (Senioren)',
        linkText: 'Seniorenbüro - per Email anmelden',
        place: 'Kulturspektrum, Domfreihof 1b, 54290 Trier',
        description:
          'Unser Geruchssinn ist eng verbunden mit unseren Erinnerungen. Deshalb können wir durch Düfte und Gerüche unsere damit verknüpften Erinnerungen in Windeseile abrufen. Somit sind bestimmte Duftnoten wundervoll, um assoziativ positive Ereignisse zu speichern. Lass dich verzaubern von dem Wohlgeruch vergangener und immer andauernder Zeiten. Mit ätherischen Ölen auf Naturbasis und anderen natürlichen Stoffen stellst du deine eigene Naturkosmetik, ein Peeling her. \n\n' +
          'Für die verbindliche Anmeldung zum Workshop, bitte beim Seniorenbüro Trier melden. \n\n' +
          'Die Teilnehmer:innengebühr beträgt 15 Euro (14 Euro für Mitglieder). \n\n' +
          'Wir danken unseren Förder:innen:\n KULTURSPEKTRUM\n Stadt Trier\n Kulturstiftung Sparkasse Trier\n Stiftung Rehkids\n',
        phone: '0651 75566',
        email:
          'kontakt@seniorenbuero-trier.de?subject=Verbindliche Anmeldung - Duftreise - wir machen Peeling (Senioren)',
        emailText: 'Seniorenbüro Anmeldung',
        expanded: false,
      },
      {
        id: 12,
        imgSrc: 'src/assets/projects/gb/events/knotenglueck.jpg',
        title: 'KNOTENGLÜCK - MAKRAMEE KNÜPFEN (ab 16 Jahren)',
        date: date.buildDate({
          year: 2022,
          month: 8,
          date: 9,
        }),
        dateText: 'DIENSTAG, 9. AUGUST 2022 VON 17:30 BIS 20:30',
        link: 'https://www.ticket-regional.de/events_info.php?eventID=189293',
        place: 'Kulturspektrum, Domfreihof 1b, 54290 Trier',
        description:
          'In diesem Makramee Kurs werden dir die ersten Knoten gezeigt. In entspannter Atmosphäre kannst du achtsam dein WINDLICHT knüpfen. Du brauchst keine Vorkenntnisse. \n\n' +
          'Liebe Menschen: Wir haben uns entschieden, unsere Kurse und Events über Ticket Regional anzubieten. Deshalb kommen noch VVK-Gebühren hinzu. Vielen Dank für Euer Verständnis und Euren Support!\n\n' +
          'Wir danken unseren Förder:innen:\n KULTURSPEKTRUM\n Stadt Trier\n Kulturstiftung Sparkasse Trier\n Stiftung Rehkids\n',
        expanded: false,
      },
      {
        id: 13,
        imgSrc: 'src/assets/projects/gb/events/souvenirshop.jpg',
        title:
          'MEIN SOUVENIRSHOP - AUS ALT MACH NEU (ab 7 Jahren) | 10:00 - 13:00',
        date: date.buildDate({
          year: 2022,
          month: 8,
          date: 10,
        }),
        dateText: 'MITTWOCH, 10. AUGUST 2022 VON 10:00 BIS 13:00',
        link: 'https://www.ticket-regional.de/events_info.php?eventID=189294',
        place: 'Kulturspektrum, Domfreihof 1b, 54290 Trier',
        description:
          'Jede*r bringt alte Shirts oder Schuhe mit zum Bemalen und Umgestalten. In diesem Kurs haben die Teilnehmer die Möglichkeit, ihre alten Kleidungsstücke und Accessoires durch textiles (Um-) Gestalten kreativ aufzuwerten und in neuem Glanz erscheinen zu lassen. Gearbeitet wird mit Textilfarben, weiteren Materialien wie Pailletten, Knöpfen und Knotentechniken. Die Teilnehmer lernen in einem kreativen Prozess den Spaß und die Leichtigkeit am Upcycling kennen, um ihren eigenen Fußabdruck für das Klima zu setzen. \n\n' +
          'Liebe Menschen: Wir haben uns entschieden, unsere Kurse und Events über Ticket Regional anzubieten. Deshalb kommen noch VVK-Gebühren hinzu. Vielen Dank für Euer Verständnis und Euren Support!\n\n' +
          'Wir danken unseren Förder:innen:\n KULTURSPEKTRUM\n Stadt Trier\n Kulturstiftung Sparkasse Trier\n Stiftung Rehkids\n',
        expanded: false,
      },
      {
        id: 14,
        imgSrc: 'src/assets/projects/gb/events/souvenirshop.jpg',
        title:
          'MEIN SOUVENIRSHOP - AUS ALT MACH NEU (ab 7 Jahren) | 15:00 - 18:00',
        date: date.buildDate({
          year: 2022,
          month: 8,
          date: 10,
        }),
        dateText: 'MITTWOCH, 10. AUGUST 2022 VON 15:00 BIS 18:00',
        link: 'https://www.ticket-regional.de/events_info.php?eventID=189294',
        place: 'Kulturspektrum, Domfreihof 1b, 54290 Trier',
        description:
          'Jede*r bringt alte Shirts oder Schuhe mit zum Bemalen und Umgestalten. In diesem Kurs haben die Teilnehmer die Möglichkeit, ihre alten Kleidungsstücke und Accessoires durch textiles (Um-) Gestalten kreativ aufzuwerten und in neuem Glanz erscheinen zu lassen. Gearbeitet wird mit Textilfarben, weiteren Materialien wie Pailletten, Knöpfen und Knotentechniken. Die Teilnehmer lernen in einem kreativen Prozess den Spaß und die Leichtigkeit am Upcycling kennen, um ihren eigenen Fußabdruck für das Klima zu setzen. \n\n' +
          'Liebe Menschen: Wir haben uns entschieden, unsere Kurse und Events über Ticket Regional anzubieten. Deshalb kommen noch VVK-Gebühren hinzu. Vielen Dank für Euer Verständnis und Euren Support!\n\n' +
          'Wir danken unseren Förder:innen:\n KULTURSPEKTRUM\n Stadt Trier\n Kulturstiftung Sparkasse Trier\n Stiftung Rehkids\n',
        expanded: false,
      },
      {
        id: 15,
        imgSrc: 'src/assets/projects/gb/events/seniorenyoga.jpg',
        title: 'OLD BUT GOLD - SENIORENYOGA',
        date: date.buildDate({
          year: 2022,
          month: 8,
          date: 11,
        }),
        dateText: 'DONNERSTAG, 11. AUGUST 2022 VON 10:00 BIS 11:30',
        link: 'mailto:kontakt@seniorenbuero-trier.de?subject=Verbindliche Anmeldung - Old but gold - Seniorenyoga',
        linkText: 'Seniorenbüro - per Email anmelden',
        place: 'Kulturspektrum, Domfreihof 1b, 54290 Trier',
        description:
          'In dieser Yogaeinheit wird auf besonders achtsame und sanfte Weise der Körper bewegt und ausgerichtet. Mit verschiedenen Hilfsmitteln, wie Stühlen und Hockern wird eine Bewegungsfolge erarbeitet, die den Schülern hilft, ihren Körper wahrzunehmen und auf einzelne körperliche Schwierigkeiten in ihrem Alltag eingegangen. Eine angeleitete Meditation hilft den Teilnehmern mental zur Ruhe zu kommen. \n\n' +
          'Für die verbindliche Anmeldung zum Workshop, bitte beim Seniorenbüro Trier melden. \n\n' +
          'Die Teilnehmer:innengebühr beträgt 12 Euro (11 Euro für Mitglieder). \n\n' +
          'Wir danken unseren Förder:innen:\n KULTURSPEKTRUM\n Stadt Trier\n Kulturstiftung Sparkasse Trier\n Stiftung Rehkids\n',
        phone: '0651 75566',
        email:
          'kontakt@seniorenbuero-trier.de?subject=Verbindliche Anmeldung - Old but gold - Seniorenyoga',
        emailText: 'Seniorenbüro Anmeldung',
        expanded: false,
      },
      {
        id: 16,
        imgSrc: 'src/assets/projects/gb/events/cajon.jpg',
        title: 'CAJON WORKSHOP (ab 16 Jahren)',
        date: date.buildDate({
          year: 2022,
          month: 8,
          date: 11,
        }),
        dateText: 'DONNERSTAG, 11. AUGUST 2022 VON 14:30 BIS 16:30',
        link: 'https://www.ticket-regional.de/events_info.php?eventID=189295',
        place: 'Kulturspektrum, Domfreihof 1b, 54290 Trier',
        description:
          'In unserem Cajon Workshop bekommst du Rhythmus direkt ins Blut. Wie das Herz rhythmisch im Takt schlägt, so verbindet die Cajon wie andere Perkussionen mit Menschen auf der ganzen Welt. Hier entführen wir dich in eine Welt vielfältiger Rhythmen, denn Rhythmus ist Leben. Wenn der groove dich packt schau einfach bei uns vorbei. \n Wir freuen uns auf dich, Ahmed und Niclas. \n\n' +
          'Liebe Menschen: Wir haben uns entschieden, unsere Kurse und Events über Ticket Regional anzubieten. Deshalb kommen noch VVK-Gebühren hinzu. Vielen Dank für Euer Verständnis und Euren Support!\n\n' +
          'Wir danken unseren Förder:innen:\n KULTURSPEKTRUM\n Stadt Trier\n Kulturstiftung Sparkasse Trier\n Stiftung Rehkids\n',
        expanded: false,
      },
      {
        id: 17,
        imgSrc: 'src/assets/projects/gb/events/hanpan.jpg',
        title: 'HANPAN WORKSHOP (ab 16 Jahren)',
        date: date.buildDate({
          year: 2022,
          month: 8,
          date: 11,
        }),
        dateText: 'DONNERSTAG, 11. AUGUST 2022 VON 17:00 BIS 19:00',
        link: 'https://www.ticket-regional.de/events_info.php?eventID=189296',
        place: 'Kulturspektrum, Domfreihof 1b, 54290 Trier',
        description:
          'In unserem Workshop entführen wir dich in die Welt der universell, sphärischen Klänge. Unser HanPan Workshop hat das Potential dich klanglich wie körperlich zu transformieren und der Welt mit offenem Herzen zu lauschen. Schwingungen und Rhythmen durchdringen das Universum wie alle in ihm lebenden Lebewesen. Durch sie erfahren wir die Grenzenlosigkeit dessen, was wir materiell darstellen. Begib dich mit uns auf eine wundervolle Reise und entdecke neue Sphären. \n Wir freuen uns auf dich, Ahmed und Niclas. \n\n' +
          'Liebe Menschen: Wir haben uns entschieden, unsere Kurse und Events über Ticket Regional anzubieten. Deshalb kommen noch VVK-Gebühren hinzu. Vielen Dank für Euer Verständnis und Euren Support!\n\n' +
          'Wir danken unseren Förder:innen:\n KULTURSPEKTRUM\n Stadt Trier\n Kulturstiftung Sparkasse Trier\n Stiftung Rehkids\n',
        expanded: false,
      },
      {
        id: 18,
        imgSrc: 'src/assets/projects/gb/events/konzertorientalpercussion.jpg',
        title: 'KONZERT - ORIENTAL PERCUSSION',
        date: date.buildDate({
          year: 2022,
          month: 8,
          date: 11,
        }),
        dateText: 'DONNERSTAG, 11. AUGUST 2022 VON 19:30 BIS 21:00',
        link: 'https://www.ticket-regional.de/events_info.php?eventID=189297',
        place: 'Kulturspektrum, Domfreihof 1b, 54290 Trier',
        description:
          'In unserem Konzert laden wird dich in die arabische Welt der Klänge ein. Hier trifft Orient auf Okzident. Flöten, Rhamentrommel, HanPan und mehr laden deine Ohren ein sich verwöhnen zu lassen und in die Tiefe abzutauchen. Hier darfst du einfach bei dir sein. Lass dich verzaubern von arabischen Klangwelten und folge uns auf unserer Reise in 1000 und eine Nacht. \n\n' +
          'Liebe Menschen: Wir haben uns entschieden, unsere Kurse und Events über Ticket Regional anzubieten. Deshalb kommen noch VVK-Gebühren hinzu. Vielen Dank für Euer Verständnis und Euren Support!\n\n' +
          'Wir danken unseren Förder:innen:\n KULTURSPEKTRUM\n Stadt Trier\n Kulturstiftung Sparkasse Trier\n Stiftung Rehkids\n',
        expanded: false,
      },
      {
        id: 19,
        imgSrc: 'src/assets/projects/gb/events/knotenglueck_senioren.jpg',
        title: 'KNOTENGLÜCK - MAKRAMEE KNÜPFEN (SENIOREN)',
        date: date.buildDate({
          year: 2022,
          month: 8,
          date: 12,
        }),
        dateText: 'FREITAG, 12. AUGUST 2022 VON 10:00 BIS 13:00',
        link: 'mailto:kontakt@seniorenbuero-trier.de?subject=Verbindliche Anmeldung - Kontenglück - Makramee knüpfen',
        linkText: 'Seniorenbüro - per Email anmelden',
        place: 'Kulturspektrum, Domfreihof 1b, 54290 Trier',
        description:
          'In diesem Makramee Kurs werden dir die ersten Knoten gezeigt. In entspannter Atmosphäre kannst du achtsam deine BLUMENAMPEL knüpfen. Du brauchst keine Vorkenntnisse. \n\n' +
          'Für die verbindliche Anmeldung zum Workshop, bitte beim Seniorenbüro Trier melden. \n\n' +
          'Die Teilnehmer:innengebühr beträgt 20 Euro (18 Euro für Mitglieder). \n\n' +
          'Wir danken unseren Förder:innen:\n KULTURSPEKTRUM\n Stadt Trier\n Kulturstiftung Sparkasse Trier\n Stiftung Rehkids\n',
        phone: '0651 75566',
        email:
          'kontakt@seniorenbuero-trier.de?subject=Verbindliche Anmeldung - Kontenglück - Makramee knüpfen',
        emailText: 'Seniorenbüro Anmeldung',
        expanded: false,
      },
      {
        id: 20,
        imgSrc: 'src/assets/projects/gb/events/umgangmitemotionen.jpg',
        title: 'UMGANG MIT EMOTIONEN (ab 16 Jahren)',
        date: date.buildDate({
          year: 2022,
          month: 8,
          date: 12,
        }),
        dateText: 'FREITAG, 12. AUGUST 2022 VON 14:00 BIS 17:30',
        link: 'mailto:anfragen@kollektivmehrklang.de?subject=Verbindliche Anmeldung - Umgang mit Emotionen',
        linkText: '*PWYW* - per Email anmelden',
        place: 'Kulturspektrum, Domfreihof 1b, 54290 Trier',
        description:
          'Wie man Emotionen für sich nutzt und sich selbst und andere Menschen besser versteht. \n Den tieferen Sinn hinter Emotionen verstehen! Emotionen nutzen, um an deine innersten Denkmuster zu kommen und dich persönlich weiterzuentwickeln! Hier lernst du deinen Emotionen Raum zu geben, sodass sie gefühlt werden können und du somit heilen kannst. Außerdem lernst du warum alle Emotionen Ich-bezogen sind und wie du somit Verantwortung für deine Gefühle übernehmen kannst. \n\n' +
          'Der Workshop finanziert sich nach dem „Pay-what-you-want“-Prinzip. Du kannst am Ende des Workshops selbst entscheiden, was er dir wert ist. Wir empfehlen einen Betrag zwischen 10 Euro und 30 Euro.\n\n' +
          'Für die verbindliche Anmeldung zum Workshop, bitte eine E-Mail an anfragen@kollektivmehrklang.de schicken.\n\n' +
          'Wir danken unseren Förder:innen:\n KULTURSPEKTRUM\n Stadt Trier\n Kulturstiftung Sparkasse Trier\n Stiftung Rehkids\n',
        expanded: false,
      },
      {
        id: 21,
        imgSrc: 'src/assets/projects/gb/events/inklusion.jpg',
        title:
          'GEMEINSAM MUSIZIEREN UND SINGEN (ab 12 Jahren) (INKLUSIONSWORKSHOP)',
        date: date.buildDate({
          year: 2022,
          month: 8,
          date: 13,
        }),
        dateText: 'SAMSTAG, 13. AUGUST 2022 VON 16:00 BIS 19:00',
        link: 'mailto:anfragen@kollektivmehrklang.de?subject=Verbindliche Anmeldung - Gemeinsam musizieren und singen - (Inklusionsworkshop)',
        linkText: '*PWYW* - per Email anmelden',
        place: 'Kulturspektrum, Domfreihof 1b, 54290 Trier',
        description:
          'Wir, die Ufos, lieben es miteinander zu musizieren und dies möchten wir nun mit euch teilen. Hierbei wird gesungen, es werden Instrumente ausprobiert und wir haben gemeinsam Spaß an der Musik. Wir freuen uns auf euch! \n\n' +
          'Der Workshop finanziert sich nach dem „Pay-what-you-want“-Prinzip. Du kannst am Ende des Workshops selbst entscheiden, was er dir wert ist. Wir empfehlen einen Betrag zwischen 10 Euro und 20 Euro.\n\n' +
          'Für die verbindliche Anmeldung zum Workshop, bitte eine E-Mail an anfragen@kollektivmehrklang.de schicken.\n\n' +
          'Wir danken unseren Förder:innen:\n KULTURSPEKTRUM\n Stadt Trier\n Kulturstiftung Sparkasse Trier\n Stiftung Rehkids\n',
        expanded: false,
      },
      {
        id: 22,
        imgSrc: 'src/assets/projects/gb/events/freiesmiteinandermalen.jpg',
        title: 'FREIES MITEINANDER MALEN (von 7 bis 13 Jahren)',
        date: date.buildDate({
          year: 2022,
          month: 8,
          date: 15,
        }),
        dateText: 'MONTAG, 15. AUGUST 2022 VON 10:00 BIS 13:00',
        link: 'https://www.ticket-regional.de/events_info.php?eventID=189298',
        place: 'Kulturspektrum, Domfreihof 1b, 54290 Trier',
        description:
          'In diesem kunterbunten Kurs wird Kindern die Möglichkeit gegeben, mit verschiedenen Materialien zu experimentieren. Auf Tonkarton oder Blättern aus Papier wird mit Wasserfarbe, Buntstift, Filz- und Wachsmalstiften gepinselt und ausprobiert, was alles möglich ist und was man wie mixen kann. Es entstehen kleine Kunstwerke, die natürlich mit nach Hause getragen werden dürfen, um den Glücksbringer weiter zu verbreiten. \n\n' +
          'Liebe Menschen: Wir haben uns entschieden, unsere Kurse und Events über Ticket Regional anzubieten. Deshalb kommen noch VVK-Gebühren hinzu. Vielen Dank für Euer Verständnis und Euren Support!\n\n' +
          'Wir danken unseren Förder:innen:\n KULTURSPEKTRUM\n Stadt Trier\n Kulturstiftung Sparkasse Trier\n Stiftung Rehkids\n',
        expanded: false,
      },
      {
        id: 23,
        imgSrc: 'src/assets/projects/gb/events/kinderspielenhoch.jpg',
        imgContainerWidth: '176px',
        title: 'FREIES MITEINANDER SPIELEN (von 7 bis 13 Jahren)',
        date: date.buildDate({
          year: 2022,
          month: 8,
          date: 16,
        }),
        dateText: 'DIENSTAG, 16. AUGUST 2022 VON 10:00 BIS 12:30',
        link: 'https://www.ticket-regional.de/events_info.php?eventID=189299',
        place: 'Kulturspektrum, Domfreihof 1b, 54290 Trier',
        description:
          'Dieser Kurs ist eine bunte Mischung aus vielen beliebten Sitzkreisspielen, kleinen Pausen und lustigen, frohen Momenten, die durch die Freude des Augenblicks entstehen. \n\n' +
          'Liebe Menschen: Wir haben uns entschieden, unsere Kurse und Events über Ticket Regional anzubieten. Deshalb kommen noch VVK-Gebühren hinzu. Vielen Dank für Euer Verständnis und Euren Support!\n\n' +
          'Wir danken unseren Förder:innen:\n KULTURSPEKTRUM\n Stadt Trier\n Kulturstiftung Sparkasse Trier\n Stiftung Rehkids\n',
        expanded: false,
      },
      {
        id: 24,
        imgSrc: 'src/assets/projects/gb/events/mutmacher.jpg',
        title: 'DER MUTMACHER – SELBSTMOTIVATION (ab 13 Jahren)',
        date: date.buildDate({
          year: 2022,
          month: 8,
          date: 17,
        }),
        dateText: 'MITTWOCH, 17. AUGUST 2022 VON 16:00 BIS 19:00',
        link: 'https://www.ticket-regional.de/events_info.php?eventID=189317',
        place: 'Kulturspektrum, Domfreihof 1b, 54290 Trier',
        description:
          'In diesem Kurs werden Tricks und Techniken zur Selbstmotivation erarbeitet, die das eigene Handeln im Alltag unterstützen und erleichtern sollen. Die Teilnehmer:innen von Jung bis Alt werden in Einzel- und Gruppenübungen an das Thema herangeführt und können sich in der eigenen Motivation testen und reflektieren. Der Workshop möchte Stärken kräftigen und neuen Mut machen, schwierige Aufgaben im Alltag leichter zu bewältigen. \n\n' +
          'Liebe Menschen: Wir haben uns entschieden, unsere Kurse und Events über Ticket Regional anzubieten. Deshalb kommen noch VVK-Gebühren hinzu. Vielen Dank für Euer Verständnis und Euren Support!\n\n' +
          'Wir danken unseren Förder:innen:\n KULTURSPEKTRUM\n Stadt Trier\n Kulturstiftung Sparkasse Trier\n Stiftung Rehkids\n',
        expanded: false,
      },
      {
        id: 25,
        imgSrc: 'src/assets/projects/gb/events/kreativität_senioren.jpg',
        title: 'KREATIVITÄT AUF NEUE ART ENTDECKEN (SENIOREN)',
        date: date.buildDate({
          year: 2022,
          month: 8,
          date: 18,
        }),
        dateText: 'DONNERSTAG, 18. AUGUST 2022 VON 10:00 BIS 12:00',
        link: 'mailto:kontakt@seniorenbuero-trier.de?subject=Verbindliche Anmeldung - Kreativität auf neue Art entdecken',
        linkText: 'Seniorenbüro - per Email anmelden',
        place: 'Kulturspektrum, Domfreihof 1b, 54290 Trier',
        description:
          'In diesem Kurs werden verschiedene Techniken zum Einsatz gebracht, um Farbe expressiv auf Leinwand zu bringen. Gestalten Sie ihr eigenes kleines Kunstwerk, das Sie mit nach Hause nehmen können. \n\n' +
          'Für die verbindliche Anmeldung zum Workshop, bitte beim Seniorenbüro Trier melden. \n\n' +
          'Die Teilnehmer:innengebühr beträgt 15 Euro (14 Euro für Mitglieder). \n\n' +
          'Wir danken unseren Förder:innen:\n KULTURSPEKTRUM\n Stadt Trier\n Kulturstiftung Sparkasse Trier\n Stiftung Rehkids\n',
        phone: '0651 75566',
        email:
          'kontakt@seniorenbuero-trier.de?subject=Verbindliche Anmeldung - Kreativität auf neue Art entdecken',
        emailText: 'Seniorenbüro Anmeldung',
        expanded: false,
      },
      {
        id: 26,
        imgSrc: 'src/assets/projects/gb/events/regenbogensuche.jpg',
        imgContainerWidth: '176px',
        title:
          'REGENBOGENSUCHE - KREATIVES GESTALTEN UND SPIELEN (von 6 bis 10 Jahren)',
        date: date.buildDate({
          year: 2022,
          month: 8,
          date: 20,
        }),
        dateText: 'SAMSTAG, 20. AUGUST 2022 VON 11:00 BIS 12:30',
        link: 'https://www.ticket-regional.de/events_info.php?eventID=189318',
        place: 'Kulturspektrum, Domfreihof 1b, 54290 Trier',
        description:
          'Die Kinder werden kreativ angeleitet sich mit dem Wunder aus Licht, dem Regenbogen und seinen Farben auseinanderzusetzen. Wir malen, basteln Bildkarten, die wir sofort als gemeinsames Spiel in kleinen Gruppen nutzen werden. Die Malergebnisse werden mit dem Spiel-Erlebnis mitgegeben und können so weitergetragen werden. \n\n' +
          'Liebe Menschen: Wir haben uns entschieden, unsere Kurse und Events über Ticket Regional anzubieten. Deshalb kommen noch VVK-Gebühren hinzu. Vielen Dank für Euer Verständnis und Euren Support!\n\n' +
          'Wir danken unseren Förder:innen:\n KULTURSPEKTRUM\n Stadt Trier\n Kulturstiftung Sparkasse Trier\n Stiftung Rehkids\n',
        expanded: false,
      },
      {
        id: 27,
        imgSrc: 'src/assets/projects/gb/events/tobimukke.jpg',
        title: 'ELEKTRONISCHE MUSIKPRODUKTION (ab 16 Jahren)',
        date: date.buildDate({
          year: 2022,
          month: 8,
          date: 23,
        }),
        dateText: 'DIENSTAG, 23. AUGUST 2022 VON 10:00 BIS 14:30',
        link: 'https://www.ticket-regional.de/events_info.php?eventID=189319',
        place: 'Kulturspektrum, Domfreihof 1b, 54290 Trier',
        description:
          'Ob Pop, Indie oder HipHop. In vielen Musikrichtungen werden heutzutage Elemente aus elektronischer Musik verwendet. In diesem Workshop möchten wir euch in insgesamt 4 Stunden einige Geräte vorstellen, die ihr benötigt, um elektronische Musik zu erzeugen und euch notwendige Basics im Umgang mit diesen Geräten (Synthesizer, Drumcomputer, Musikproduktionsprogramm Ableton Live) vermitteln. Da erst am kommenden Tag ein Ableton Intensivkurs stattfindet wollen wir uns hier zum größten Teil auf das Arbeiten an Hardwaregeräten und dem zusammenstellen eines elektronischen Setups konzentrieren. Einige Basics in Ableton sollen jedoch vermittelt werden, weil sich damit viele Funktionen der elektronischen Musikproduktion am besten erklären lassen. Wer danach weiteres Interesse an Ableton hat kann gerne auch aufbauend an dem Abletonkurs von Adrian (siehe Veranstaltungen) teilnehmen.\n\n Max. 10 Teilnehmer:innen\n\n Der Kursleiter:\n Tobi, in Trier auch bekannt unter dem Künstlernamen „Whale Vs Elephant“, ist ein DJ und Musikproduzent. Er arbeitet seit ca. 10 Jahren mit Ableton Live und hat im Laufe der Zeit immer mehr Synthesizer und Drumcomputer in seine Produktionen mit eingebunden. Bevor es ihn nach Trier verschlagen hat, hat er eine Zeit lang in Berlin und Reykjavik gelebt und ist viel gereist. Mit seiner eigenen Musik ist er auf Festivals wie der Fusion, Iceland Airwaves oder dem größten Elektrofestival in Georgien, dem Gem Fest aufgetreten. Unterwegs hat er mit verschiedenen Musikern und Produzenten zusammengearbeitet und konnte so seine Erfahrungen in dem Bereich erweitern und festigen. Seit 2019 bietet er Workshops und Kurse in elektronischer Musikproduktion für Kinder, Jugendliche und Erwachsene an, in denen er Spass und Kreativität verbindet und seine Kursteilnehmer von den ersten Beats bis hin zu fertigen Songstrukturen begleitet.\n\n www.soundcloud.com/whalevselephant\n\n www.facebook.com/whalevselephantofficial\n\n Themen:\n - Theoretische Einführung: Was ist elektronische Musik und was braucht man, um sie zu erzeugen.\n - Basiswissen über Ableton Live, Synthesizer und Drumcomputer: Ausprobieren und Kennenlernen der Geräte.\n - Wie baue ich ein Live- oder Studiosetup: Einbindung mehrerer Geräte ins Zusammenspiel\n - Erste Songstrukturen: Wie gehe ich einen Song an?\n\n Als Bonus gibt es im Anschluss ca. 1h elektronische Jamsession mit Sebastian vom Mehrklang Kollektiv. Wer möchte kann mit Sebastian und Tobi jammen und so seine gelernten neuen Fähigkeiten direkt umsetzen und austesten. Die Teilnahme an der Jamsession ist kostenlos.\n\n Um an dem Kurs teilnehmen zu können, braucht ihr keinerlei eigenes Equipment. Alles wird vor Ort da sein.\n\n Zielgruppe:\n Jugendliche ab 16 und Erwachsene jeden Alters, die…:\n - …sich für elektronische Musikproduktion interessieren aber noch nie etwas mit dem Thema zu tun hatten.\n - …sich eigentlich in einer anderen Musikrichtung zuhause fühlen aber elektronische Elemente in ihre Musik mit einfließen lassen wollen.\n - …sich schon etwas in das Thema eingearbeitet haben aber jetzt auf dem Schlauch stehen.\n - …Ableton, Drumcomputer oder Synthesizer zu Hause haben und sie besser verstehen und/oder in ein Setup einbinden wollen.\n\n' +
          'Liebe Menschen: Wir haben uns entschieden, unsere Kurse und Events über Ticket Regional anzubieten. Deshalb kommen noch VVK-Gebühren hinzu. Vielen Dank für Euer Verständnis und Euren Support!\n\n' +
          'Wir danken unseren Förder:innen:\n KULTURSPEKTRUM\n Stadt Trier\n Kulturstiftung Sparkasse Trier\n Stiftung Rehkids\n',
        expanded: false,
      },
      {
        id: 28,
        imgSrc: 'src/assets/projects/gb/events/sebastianmukke.jpg',
        imgContainerWidth: '167px',
        title: 'WIR MACHEN MUKKE (ab 16 Jahren)',
        date: date.buildDate({
          year: 2022,
          month: 8,
          date: 24,
        }),
        dateText: 'MITTWOCH, 24. AUGUST 2022 VON 11:00 BIS 15:00',
        link: 'https://www.ticket-regional.de/events_info.php?eventID=189320',
        place: 'Kulturspektrum, Domfreihof 1b, 54290 Trier',
        description:
          'Eine spielerische Einführung in die Welt der elektronischen Musik. Von der Hand direkt ins Ohr, von den Grundkonzepten bis zum Jam. Kein klicken am PC, sondern das drehen von Knöpfen am Drumcomputer, Synthesizern und Effektgeräten. \n\n' +
          'Liebe Menschen: Wir haben uns entschieden, unsere Kurse und Events über Ticket Regional anzubieten. Deshalb kommen noch VVK-Gebühren hinzu. Vielen Dank für Euer Verständnis und Euren Support!\n\n' +
          'Wir danken unseren Förder:innen:\n KULTURSPEKTRUM\n Stadt Trier\n Kulturstiftung Sparkasse Trier\n Stiftung Rehkids\n',
        expanded: false,
      },
      {
        id: 29,
        imgSrc: 'src/assets/projects/gb/events/adrianmukke.jpg',
        title: 'ABLETON LIVE MUSIKPRODUKTION (ab 16 Jahren)',
        date: date.buildDate({
          year: 2022,
          month: 8,
          date: 24,
        }),
        dateText: 'MITTWOCH, 24. AUGUST 2022 VON 16:00 BIS 19:00',
        link: 'https://www.ticket-regional.de/events_info.php?eventID=189322',
        place: 'Kulturspektrum, Domfreihof 1b, 54290 Trier',
        description:
          'Der Kurs soll den Entstehungsprozess einer elektronischen Musikproduktion veranschaulichen, sowie praktische Tipps und Demonstrationen zur Handhabung einer DAW (Ableton Live) geben. Egal ob House, Techno oder Electro, egal ob blutiger Anfänger, Fortgeschrittener oder Profi, egal ob jung oder alt. \n\n' +
          'Liebe Menschen: Wir haben uns entschieden, unsere Kurse und Events über Ticket Regional anzubieten. Deshalb kommen noch VVK-Gebühren hinzu. Vielen Dank für Euer Verständnis und Euren Support!\n\n' +
          'Wir danken unseren Förder:innen:\n KULTURSPEKTRUM\n Stadt Trier\n Kulturstiftung Sparkasse Trier\n Stiftung Rehkids\n',
        expanded: false,
      },
      {
        id: 30,
        imgSrc: 'src/assets/projects/gb/events/maxmukke.jpg',
        title: 'MODULAR MEETUP',
        date: date.buildDate({
          year: 2022,
          month: 8,
          date: 24,
        }),
        dateText: 'MITTWOCH, 24. AUGUST 2022 VON 20:00 BIS 23:00',
        link: 'mailto:anfragen@kollektivmehrklang.de?subject=Verbindliche Anmeldung - Modular Meetup',
        linkText: '*PWYW* - per Email anmelden',
        place: 'Kulturspektrum, Domfreihof 1b, 54290 Trier',
        description:
          "Zum Modular Meetup treffen sich Musiker und Klangbastler, die sich für elektronische Musikhardware begeistern. Fokus hierbei legen wir auf Eurorack, Desktop synths, drum machines & Sampler zur Erzeugung elektronischer (meist) Tanzmusik. \n VCA's, Filtertypen, Oszillatoren & Co. - alle werden unter die Lupe genommen. Für Enthusiasten mit jeglichem musikalischen Background, vom blutigen Anfänger bis zum Producing-Nerd! \n\n" +
          'Der Workshop finanziert sich nach dem „Pay-what-you-want“-Prinzip. Du kannst am Ende des Workshops selbst entscheiden, was er dir wert ist. Wir empfehlen einen Betrag zwischen 10 Euro und 30 Euro.\n\n' +
          'Für die verbindliche Anmeldung zum Workshop, bitte eine E-Mail an anfragen@kollektivmehrklang.de schicken.\n\n' +
          'Wir danken unseren Förder:innen:\n KULTURSPEKTRUM\n Stadt Trier\n Kulturstiftung Sparkasse Trier\n Stiftung Rehkids\n',
        expanded: false,
      },
      {
        id: 31,
        imgSrc: 'src/assets/projects/gb/events/atmedichfrei.jpg',
        title: 'ATME DICH FREI',
        date: date.buildDate({
          year: 2022,
          month: 8,
          date: 25,
        }),
        dateText: 'DONNERSTAG, 25. AUGUST 2022 VON 17:00 BIS 19:00',
        link: 'https://www.ticket-regional.de/events_info.php?eventID=189323',
        place: 'Kulturspektrum, Domfreihof 1b, 54290 Trier',
        description:
          'In unserem Workshop wird eine Vielzahl von Atemtechniken anschaulich erklärt und geübt. In einem darauffolgenden Prana Vinyasa Flow werden Atem und Bewegung in Einklang gebracht, um in einer abschließenden Atemmeditation den Teilnehmern die Möglichkeit zu bieten auf eine tiefe Ebene ihres Unbewusstseins einzutauchen und Blockaden zu lösen. \n\n' +
          'Liebe Menschen: Wir haben uns entschieden, unsere Kurse und Events über Ticket Regional anzubieten. Deshalb kommen noch VVK-Gebühren hinzu. Vielen Dank für Euer Verständnis und Euren Support!\n\n' +
          'Wir danken unseren Förder:innen:\n KULTURSPEKTRUM\n Stadt Trier\n Kulturstiftung Sparkasse Trier\n Stiftung Rehkids\n',
        expanded: false,
      },
      {
        id: 32,
        imgSrc: 'src/assets/projects/gb/events/familienfreundlichesevent.jpg',
        title: 'MEHR GLÜCKSBRINGER',
        date: date.buildDate({
          year: 2022,
          month: 8,
          date: 27,
        }),
        dateText: 'SAMSTAG, 27. AUGUST 2022 VON 14:00 BIS 22:00',
        link: 'https://www.ticket-regional.de/events_info.php?eventID=189324',
        place: 'Kulturspektrum, Domfreihof 1b, 54290 Trier',
        description:
          'Lesungen | Lady Lightflow Show | Konzerte | Happenings Kinderschminken & Spielecke | Clownshow | Jam Sessions \n\n Die Ermäßigung beim Event 27. + 28.8. MEHR GLÜCKSBRINGER erhalten: \n - Studenten \n - Kinder von 7 bis 14 Jahren \n - Menschen mit Behinderung \n - Senioren \n\n Für Kinder unter 7 Jahren ist die Veranstaltung kostenfrei. \n\n' +
          'Liebe Menschen: Wir haben uns entschieden, unsere Kurse und Events über Ticket Regional anzubieten. Deshalb kommen noch VVK-Gebühren hinzu. Vielen Dank für Euer Verständnis und Euren Support!\n\n' +
          'Wir danken unseren Förder:innen:\n KULTURSPEKTRUM\n Stadt Trier\n Kulturstiftung Sparkasse Trier\n Stiftung Rehkids\n',
        expanded: false,
      },
      {
        id: 33,
        imgSrc: 'src/assets/projects/gb/events/familienfreundlichesevent.jpg',
        title: 'MEHR GLÜCKSBRINGER',
        date: date.buildDate({
          year: 2022,
          month: 8,
          date: 28,
        }),
        dateText: 'SONNTAG, 28. AUGUST 2022 VON 14:00 BIS 20:00',
        link: 'https://www.ticket-regional.de/events_info.php?eventID=189324',
        place: 'Kulturspektrum, Domfreihof 1b, 54290 Trier',
        description:
          'Lesungen | Lady Lightflow Show | Konzerte | Happenings Kinderschminken & Spielecke | Clownshow | Jam Sessions \n\n Die Ermäßigung beim Event 27. + 28.8. MEHR GLÜCKSBRINGER erhalten: \n - Studenten \n - Kinder von 7 bis 14 Jahren \n - Menschen mit Behinderung \n - Senioren \n\n Für Kinder unter 7 Jahren ist die Veranstaltung kostenfrei. \n\n' +
          'Liebe Menschen: Wir haben uns entschieden, unsere Kurse und Events über Ticket Regional anzubieten. Deshalb kommen noch VVK-Gebühren hinzu. Vielen Dank für Euer Verständnis und Euren Support!\n\n' +
          'Wir danken unseren Förder:innen:\n KULTURSPEKTRUM\n Stadt Trier\n Kulturstiftung Sparkasse Trier\n Stiftung Rehkids\n',
        expanded: false,
      },
      {
        id: 34,
        imgSrc: 'src/assets/projects/gb/events/danceability.jpg',
        title: 'DANCEABILITY - INKLUSIVE CONTACT-IMPRO',
        date: date.buildDate({
          year: 2022,
          month: 8,
          date: 31,
        }),
        dateText: 'MITTWOCH, 31. AUGUST 2022 VON 09:30 BIS 12:30',
        link: 'mailto:anfragen@kollektivmehrklang.de?subject=Verbindliche Anmeldung - Danceability - inklusive contact-impro',
        linkText: '*PWYW* - per Email anmelden',
        place: 'Kulturspektrum, Domfreihof 1b, 54290 Trier',
        description:
          'Der Workshop finanziert sich nach dem „Pay-what-you-want“-Prinzip. Du kannst am Ende des Workshops selbst entscheiden, was er dir wert ist. Wir empfehlen einen Betrag zwischen 10 Euro und 20 Euro.\n\n' +
          'Für die verbindliche Anmeldung zum Workshop, bitte eine E-Mail an anfragen@kollektivmehrklang.de schicken.\n\n' +
          'DanceAbility ist eine Bewegungs- und Tanzmethode für alle Menschen, um die eigene Bewegungssprache zu erforschen und um sich selber in Beziehung zum Gegenüber und zur ganzen Gruppe zu erleben. Auf diese Weise entsteht ein Tanz, bei dem Menschen mit einer unterschiedlichen Vielfalt an Bewegungsmöglichkeiten eine gemeinsame Basis künstlerischen Ausdrucks entdecken.Es wurde in 1987 von Alito Alessi und Karen Nelson initiiert. Alito leitete DanceAbility Projekte in vielen Ländern und bildete bisher weltweit über 400 DanceAbility Lehrer aus. Insofern entwickelte sich die feindifferenzierte Methode von DancAbility über die Jahre durch alle Teilnehmer*Innen von Alito Alessi´s weltweiten DanceAbility Aktivitäten. DanceAbility vermittelt stets die gleiche Information an Alle. Das Prinzip, dass alles Lernen gegenseitig ist. Alle Teilnehmer lernen und lehren gleich viel von und füreinander. Jede:r hat eine Stimme. DanceAbility schafft die Möglichkeit für Jede:n, gleichwertig zu sprechen. Aufgrund der genauen Methodik schafft DanceAbility die Möglichkeit für inklusive Zugänge und Entwicklungsmöglichkeiten im Bereich des Tanzschaffens. Danceability wird in ganz unterschiedlichen Arbeitsfeldern eingesetzt, wie z.B. in der Schule und in der außerschulischen Bildung, in Institutionen für Menschen mit oder ohne Behinderung, in der zeitgenössischen Tanz-Performance Kunst, in soziokulturellen Gemeindeprojekten u.s.w.. DanceAbility ist dem zeitgenössischen Tanz zuzuordnen und bestimmt diesen in seiner Entwicklung maßgeblich. \n\n In der Contact Improvisation tanzen wir gemeinsam mit einer*m Partner*innen, auch mal alleine und oft in direktem Körperkontakt. Dabei gibt es keine vorgegebenen Choreographien, Schritte, Rhythmen oder Inhalte, der Tanz entsteht aus der Dynamik zwischen den Tanzparter*innen in jedem Moment neu. So ist jeder Tanz auf seine Weise neu und spannend! Es gibt jedoch durchaus Bewegungsgrundlagen und – Fähigkeiten, die wir lernen und üben können, um unsere Tänze freier und sicherer zu gestalten und unsere Bewegungsmöglichkeiten zu erweitern. Beispiele dafür sind, Rollen am Boden, Fortbewegung in allen Ebenen des Raumes, das Spiel mit der Schwerkraft, Gewicht geben und nehmen, rolling point (rollender Kontaktpunkt am Körper), sicheres Springen, Fallen und Landen, u.s.w.. Wichtig sind in der Contact Improvisation ein (ganzkörperliches) Zuhören und Achtsamkeit in der Bewegung. Ein Tanz kann sowohl die dynamisch, schnell und kraftvoll als auch ruhig, langsam und zentriert sein. Für mich ist Contact Improvisation zudem eine wunderbare Form des Spielens und miteinander Gestaltens. Aufgrund der großen Freiheit in der Bewegungsgestaltung ist Contact Improvisation leicht zugänglich und für Menschen mit unterschiedlichen Erfahrungshintergründen und Voraussetzungen tanzbar. \n Contact Imrovisation hat sich seit den 1970er Jahren durch eine Initiative von Steve Paxton, einem der Pioniere des zeitgenössischen Tanzes in der USA entwickelt und wird mittlerweile auch seit vielen Jahren praktiziert. Contact Improvisation wird besonders oft in sogenannten Jams praktiziert, offenen Räumen, in denen sich Menschen treffen und ohne Anleitung oder Vorgabe frei miteinander tanzen. Contact Improvisation ist keine festgeschriebene Tanzform und ist – wie der Tanz selbst – ständig im Wandel. Sie ist offen für Einflüsse anderer Richtungen und beeinflusst ihrerseits Formen des Tanzes, der Bewegung, der Körperarbeit/ Somatics und der zwischenmenschlichen Begegnung. \n\n Die Workshopleiterinnen: \n Heidi Marx, ausgebildete Clownin, Zirkuspädagogin und angehende Erzieherin. Charlotte Mertes: Erzieherin, Beraterin in körpergestützter Gesprächstherapie/ Focusing Coach \n\n Seit ca. 5 Jahren widmen wir uns der Erforschung unterschiedlicher Bewegungstechniken, die das Soziale in Gemeinschaft mit dem Tanz und dem Thema Inklusion verbindet. \n Durch unsere langjährige Erfahrung im Anleiten von Gruppen im sozialen Bereich, ist es uns eine Freude gemeinsam einen Raum zu öffnen, in dem neue Erfahrungen im Tanz, Körperwahrnehmung und Körperkontakt gemacht werden können. \n Workshop / Inhalte: \n – kurzes Kennenlernen im Kreis / Infos zum Workshop. \n – Körper - Wahrnehmungsübungen, um gut am Ort anzukommen. \n – Übungen im Kontakt, alleine und mit mehreren, um in der Gruppe anzukommen. \n – Experimentieren mit Bewegungsmöglichkeiten, alleine und auch im Kontakt mit anderen, nach den Prinzipien von DanceAbility und Contakt Improvisation. \n Material: \n Bequeme Kleidung, warme Socken, (bei Bedarf eine Decke), etwas zum Trinken, Spaß an Bewegung : ) Es bedarf keiner Vorkenntnisse. \n\n' +
          'Wir danken unseren Förder:innen:\n KULTURSPEKTRUM\n Stadt Trier\n Kulturstiftung Sparkasse Trier\n Stiftung Rehkids\n',
        expanded: false,
      },
    ]);
    return {
      flyer: ref(false),
      slide: ref(1),
      fullscreen: ref(false),
      events,
      pastEvents: ref(false),
      date,
    };
  },
});
</script>
