import React, { Component } from "react";
import "./KoalaFacts.css";

export default class KoalaFacts extends Component {
  constructor() {
    super();
    this.state = {
      truth: false
    };
  }

  //Koala pic when truth: true, text when false
  togTruth() {
    this.setState({ truth: !this.state.truth });
  }

  render() {
    return (
      <div className="user-Lib-Dis-Name">
        {this.state.truth ? (
          <div>
            <p onClick={() => this.togTruth()}>
              Koalas are [redacted] horrible animals. They have one of the smallest
              brain to body ratios of any mammal, additionally - their brains
              are smooth. A brain is folded to increase the surface area for
              neurons. If you present a koala with leaves plucked from a branch,
              laid on a flat surface, the koala will not recognise it as food.
              They are too thick to adapt their feeding behaviour to cope with
              change. In a room full of potential food, they can literally
              starve to death. This is not the token of an animal that is
              winning at life. Speaking of stupidity and food, one of the likely
              reasons for their primitive brains is the fact that additionally
              to being poisonous, eucalyptus leaves (the only thing they eat)
              have almost no nutritional value. They can't afford the extra
              energy to think, they sleep more than 80% of their [redacted] lives.
              When they are awake all they do is eat, shit and occasionally
              scream like [redacted] satan. Because eucalyptus leaves hold such
              little nutritional value, koalas have to ferment the leaves in
              their guts for days on end. Unlike their brains, they have the
              largest hind gut to body ratio of any mammal. Many herbivorous
              mammals have adaptations to cope with harsh plant life taking its
              toll on their teeth, rodents for instance have teeth that never
              stop growing, some animals only have teeth on their lower jaw,
              grinding plant matter on bony plates in the tops of their mouths,
              others have enlarged molars that distribute the wear and break
              down plant matter more efficiently... Koalas are no exception,
              when their teeth erode down to nothing, they resolve the situation
              by starving to death, because they're [redacted] terrible animals.
              Being mammals, koalas raise their joeys on milk (admittedly, one
              of the lowest milk yields to body ratio... There's a trend here).
              When the young joey needs to transition from rich, nourishing
              substances like milk, to eucalyptus (a plant that seems to be
              making it abundantly clear that it doesn't want to be eaten), it
              finds it does not have the necessary gut flora to digest the
              leaves. To remedy this, the young joey begins nuzzling its
              mother's anus until she leaks a little diarrhoea (actually fecal
              pap, slightly less digested), which he then proceeds to slurp on.
              This partially digested plant matter gives him just what he needs
              to start developing his digestive system. Of course, he may not
              even have needed to bother nuzzling his mother. She may have been
              suffering from incontinence. Why? Because koalas are riddled with
              chlamydia. In some areas the infection rate is 80% or higher. This
              statistic isn't helped by the fact that one of the few other
              activities koalas will spend their precious energy on is rape.
              Despite being seasonal breeders, males seem to either not know or
              care, and will simply overpower a female regardless of whether she
              is ovulating. If she fights back, he may drag them both out of the
              tree, which brings us full circle back to the brain: Koalas have a
              higher than average quantity of cerebrospinal fluid in their
              brains. This is to protect their brains from injury... should they
              fall from a tree. An animal so thick it has its own little built
              in special ed helmet. I [redacted] hate them. Tldr; Koalas are
              stupid, leaky, STI riddled sex offenders. But, hey. They look
              cute. If you ignore the terrifying snake eyes and terrifying fee
            </p>
          </div>
        ) : (
          <img
            className="koala"
            src="http://pngimg.com/uploads/koala/koala_PNG6.png"
            alt="Koala"
            onClick={() => this.togTruth()}
          />
        )}
      </div>
    );
  }
}
