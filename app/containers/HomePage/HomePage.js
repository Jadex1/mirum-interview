/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { Component } from 'react';
import Carousel from '../../components/Carousel';
import Header from '../../components/Header';

const DOCTORS = [
  {
    id: 1,
    doctorNumber: 'One',
    doctorName: 'First Doctor',
    actorName: 'William Hartnell',
    description: 'fromom the beginning, the Doctor was a mysterious figure. He appeared to be a frail old man and yet was possessed of unexpected reserves of strength and will. An early writers guide by script editor David Whitaker describes "Doctor Who" as "frail-looking but wiry and tough as an old turkey" He obviously held tremendous knowledge of scientific matters, and yet was unable to pilot his TARDIS time ship reliably; his granddaughter Susan explained this by saying that her grandfather was "a bit forgetful"; but the TARDIS required expert piloting and guidance by the Doctor. Its systems would often break down, especially the navigational systems. This, combined with the fact the TARDIS was actually designed for six pilots, would explain the difficulty the Doctor encountered in piloting it correctly. He was abrasive, patronising, and cantankerous towards his human travelling companions, yet shared a deep emotional bond with his granddaughter Susan. He also harboured a streak of ruthlessness, being willing to lie—and in one case attempt to kill—to achieve his goals. Initially, he distrusted his first two human companions, Ian Chesterton and Barbara Wright, who were forced on him. Over time, however, as they shared adventures together, he grew closer to them, and the TARDIS crew came to share almost a family bond.',
    image: 'https://upload.wikimedia.org/wikipedia/en/7/70/First_Doctor_%28Doctor_Who%29.jpg'
  },
  {
    id: 2,
    doctorNumber: 'Two',
    doctorName: 'Second Doctor',
    actorName: 'Patrick Troughton',
    description: "The Second Doctor has been nicknamed the \"Cosmic Hobo\", as the impish Second Doctor appeared to be far more scruffy and childlike than his first incarnation. Mercurial, clever, and always a few steps ahead of his enemies, at times he could be a calculating schemer who would not only manipulate people for the greater good but act like a bumbling fool to have others underestimate his true abilities. Sometimes this appears simply as a joke, such as in The Tomb of the Cybermen 1967, where he finishes the archaeologists' calculations behind their backs, but at other times, it seems much darker. In The Evil of the Daleks 1967, he coldly manipulates Jamie into trying to rescue Victoria thus setting in motion the Human Factor tests and is unsympathetic when Edward Waterfield tries to apologise for his collaboration with the Daleks. Despite the bluster and tendency to panic when events got out of control, the Second Doctor always acted heroically and morally in his desire to help the oppressed.This Doctor is associated with the catchphrases \"When I say run, run!\", and \"Oh my giddy aunt!\" although the latter is only first heard in one of his last few stories, The Krotons and is noted for playing the recorder.",
    image: 'https://upload.wikimedia.org/wikipedia/en/c/c3/Second_Doctor_%28Doctor_Who%29.jpg'
  },
  {
    id: 3,
    doctorNumber: 'Third',
    doctorName: 'Third Doctor',
    actorName: 'Jon Pertwee',
    description: "Pertwee portrays the third such incarnation, a dapper man of action of stark contrast to his wily but less action-oriented predecessors. While previous Doctors' stories had all involved time and space travel, for production reasons Pertwee's stories initially depicted the Doctor stranded on Earth in exile, where he worked as a scientific advisor to the international military group UNIT. Within the story, the Third Doctor came into existence as part of a punishment from his own race, the Time Lords, who forced him to regenerate and also disabled his TARDIS. Eventually, this restriction is lifted and the Third Doctor embarks on more traditional time travel and space exploration stories.",
    image: 'https://upload.wikimedia.org/wikipedia/en/8/81/Third_Doctor_%28Doctor_Who%29.jpg'
  },
  {
    id: 4,
    doctorNumber: 'Fourth',
    doctorName: 'Fourth Doctor',
    actorName: 'Tom Baker',
    description: ' Baker portrays the fourth such incarnation, a whimsical and sometimes brooding individual whose enormous personal warmth is at times tempered by his capacity for righteous anger',
    image: 'https://upload.wikimedia.org/wikipedia/en/6/65/Fourth_Doctor_%28Doctor_Who%29.jpg'
  },
  {
    id: 5,
    doctorNumber: 'Fifth',
    doctorName: 'Fifth Doctor',
    actorName: 'Peter Davison',
    description: 'Davison portrays the fifth such incarnation, who has a vulnerable side and a tendency towards indecisiveness, dressed as a boyish Edwardian cricketer. He travelled with a host of companions, including boy genius Adric (Matthew Waterhouse), alien aristocrat Nyssa (Sarah Sutton) and Australian flight attendant Tegan Jovanka (Janet Fielding), whom he had travelled alongside in his previous incarnation.',
    image: 'https://upload.wikimedia.org/wikipedia/en/7/78/Fifth_Doctor_%28Doctor_Who%29.jpg'
  },
  {
    id: 6,
    doctorNumber: 'Sixth',
    doctorName: 'Sixth Doctor',
    actorName: 'Colin Baker',
    description: " Due to this influence, the Sixth Doctor evolved into a much more compassionate and likable character, arguably the softest and most paternal Doctor of all. In addition, beginning with the webcast Real Time (2003), his offputting costume was revised into a monochromatic blue variant, displayed on many audio stories' covers since then.",
    image: 'https://upload.wikimedia.org/wikipedia/en/4/4b/Sixth_Doctor_%28Doctor_Who%29.jpg'
  },
  {
    id: 7,
    doctorNumber: 'Seventh',
    doctorName: 'Seventh Doctor',
    actorName: 'Sylvester McCoy',
    description: 'McCoy portrays the seventh such incarnation, a whimsical, thoughtful character who quickly becomes more layered, secretive, and manipulative. His first companion was Melanie Bush (Bonnie Langford), a computer programmer who travelled with his previous incarnation, and who is soon succeeded by troubled teenager and explosives expert Ace (Sophie Aldred), who becomes his protégée',
    image: 'https://upload.wikimedia.org/wikipedia/en/8/89/Seventh_Doctor_%28Doctor_Whao%29.jpg'
  },
  {
    id: 8,
    doctorNumber: 'Eigth',
    doctorName: 'Eigth Doctor',
    actorName: 'Paul McGann',
    description: 'McGann portrays the eighth such incarnation, a passionate, enthusiastic, and eccentric character. His only companion in the television film is Grace Holloway (Daphne Ashbrook), a medical doctor whose surgery is partly responsible for triggering his regeneration. In the continued adventures of the character depicted in audio dramas, novels and comic books he travels alongside numerous other companions, including self-styled "Edwardian Adventuress" Charley, the alien Destrii and present-day humans Lucie and Sam.',
    image: 'https://upload.wikimedia.org/wikipedia/en/a/a1/Eighth_Doctor_%28Doctor_Who%29_%28cropped%29.jpg'
  },
  {
    id: 9,
    doctorNumber: 'Nineth',
    doctorName: 'Nineth Doctor',
    actorName: 'Christopher Eccleston',
    description: " Eccleston's portrayal were highlighted as being intentionally different from his predecessors, with Eccleston stating that his character would be less eccentric. To fit in with a 21st-century audience, The Doctor was given a primary companion, Rose Tyler, played by Billie Piper, who was designed to be as independent and courageous as himself. He also briefly travels with Adam Mitchell (Bruno Langley), a self-serving boy genius who acts as a foil to the companions but ultimately proves unworthy, and Captain Jack Harkness (John Barrowman), a reformed con man from the 51st century. The Doctor, Rose and Jack form a close team but are separated in the series finale in which each character has to make difficult choices and face sacrifice.",
    image: 'https://upload.wikimedia.org/wikipedia/en/e/ec/Ninth_Doctor_%28Doctor_Who%29.jpg'
  },
  {
    id: 10,
    doctorNumber: 'Tenth',
    doctorName: 'Tenth Doctor',
    actorName: 'David Tennant',
    description: 'The depictions of the personalities of the Tenth and Eleventh Doctors shared certain similarities e.g. both being youthful, energetic, friendly, childlike, "good boyfriend Doctors", as Steven Moffat described them and, according to Mark Gatiss "very human Doctors" when compared to other incarnations.',
    image: 'https://upload.wikimedia.org/wikipedia/en/2/21/Tenth_Doctor_%28Doctor_Who%29.jpg'
  },
  {
    id: 11,
    doctorNumber: 'Eleventh',
    doctorName: 'Eleventh Doctor',
    actorName: 'Matt Smith',
    description: "Smith's incarnation is a quick-tempered but compassionate man whose youthful appearance is at odds with his more discerning and world-weary temperament. His main companions included feisty Scot Amy Pond (Karen Gillan), her husband Rory Williams (Arthur Darvill) and the mysterious Clara Oswald (Jenna-Louise Coleman). He also frequently appeared alongside River Song (Alex Kingston), a fellow time traveller with whom he shared a romantic storyline, and was the last Doctor to appear alongside the long-serving companion Sarah Jane Smith (Elisabeth Sladen) prior to the actress' death, featuring in two episodes of the spin-off programme The Sarah Jane Adventures.",
    image: 'https://upload.wikimedia.org/wikipedia/en/d/de/Eleventh_Doctor_%28Doctor_Who%29.jpg'
  },
  {
    id: 12,
    doctorNumber: 'Twelfth',
    doctorName: 'Twelfth Doctor',
    actorName: 'Peter Capaldi',
    description: " Capaldi's portrayal of the Doctor is a spiky, brusque, contemplative, and pragmatic character who conceals his emotions in the course of making tough and sometimes ruthless decisions.",
    image: 'https://upload.wikimedia.org/wikipedia/en/e/ec/Twelfth_Doctor_%28Doctor_Who%29.jpg'
  },
  {
    id: 13,
    doctorNumber: 'Thirtheeth',
    doctorName: 'Thirtheeth Doctor',
    actorName: 'Jodie Whittaker',
    description: "The Thirteenth Doctor is incredibly lively, warm, funny, energetic, inclusive – she's the greatest friend you could wish to have as your guide around the universe.",
    image: 'https://upload.wikimedia.org/wikipedia/en/a/a2/Thirteenth_Doctor_%28Doctor_Who%29.jpg'
  },
];
class HomePage extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      doctors: DOCTORS
    };
  }

  render() {
    const { doctors } = this.state;
    return (
      <>
        <Header />
        <article>
          <section>
            <Carousel slides={doctors} />
          </section>
        </article>
      </>
    );
  }
}
export default HomePage;
