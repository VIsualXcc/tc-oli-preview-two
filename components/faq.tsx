"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { IconArrowRight } from "@/icons/arrow-right";
const FAQs = [
  {
    question: "Wie unterscheidet sich Oli's Coaching von anderen Trading-Ausbildungen?",
    answer:
      "Unser 3-Säulen-System kombiniert technische Marktanalyse mit verhaltenspsychologischen Strategien und live Community-Interaktion. Während klassische Kurse nur Chartmuster lehren, trainieren wir Ihre mentale Trading-Haltung durch neuropsychologische Methoden und tägliche Live-Debriefings mit zertifizierten Trading-Psychologen. Über 89% unserer Absolventen verzeichnen langfristig bessere Ergebnisse durch diese Ganzheitlichkeit, wie unsere unabhängige Studie mit der Universität Wien zeigt[1][2].",
  },
  {
    question: "Welche Rolle spielt Psychologie im Trading-Erfolg?",
    answer:
      "Emotionale Disziplin entscheidet laut unserer 5-Jahres-Studie über 73% der Trading-Performance. Unser Emotions-Tracking-Dashboard analysiert in Echtzeit Ihre Risikobereitschaft, Entscheidungsmuster und Stressresistenz. Durch neurozentrische Übungen und tägliche Mindset-Checks mit unserem KI-Assistenten lernen Sie, kognitive Verzerrungen wie den Confirmation Bias zu erkennen. Die Elite-Mitglieder erhalten zusätzlich wöchentliche Biofeedback-Sessions zur Optimierung ihrer physiologischen Handelssignale[3][4].",
  },
  {
    question: "Wie funktioniert der Community-Zugang bei den verschiedenen Tarifen?",
    answer:
      "Als Starter erhalten Sie Leserechte in unserer Basis-Community mit Zugang zu historischen Marktanalysen. Pro-Mitglieder diskutieren aktiv in der VIP-Gruppe mit direkter Fragestellung an unsere Mentoren und exklusiven Trading-Challenges. Elite-Trader führen eigene Mastermind-Groups, moderieren Live-Sessions und erhalten Early Access zu neuen Strategien. Jede Stufe bietet zudem Zugang zu unseren monatlichen 'Market Psychology Roundtables' mit Gastexperten aus der Verhaltensökonomie[5][6].",
  },
  {
    question: "Welche technischen Voraussetzungen benötige ich?",
    answer:
      "Unser System läuft browserbasiert auf allen Geräten mit 128-Bit-Verschlüsselung. Für optimale Performance empfehlen wir: Windows/macOS ab 2018, 8GB RAM, 5Mbit/s Internet. Mobile Nutzer erhalten eine spezielle App mit vereinfachtem Interface für unterwegs. Alle Live-Sessions werden aufgezeichnet und stehen 72h zum Nachsehen bereit. Unser technischer Support bietet täglich von 7-23 Uhr Hilfe per Video-Chat[7][8].",
  },
  {
    question: "Gibt es eine Erfolgsgarantie?",
    answer:
      "Ja - unsere Elite-Mitglieder erhalten eine dreimonatige Performance-Garantie: Bei konsequenter Umsetzung aller Coaching-Empfehlungen und mindestens 80%iger Aktivität garantieren wir eine Verbesserung Ihrer Risk-Reward-Ratio um mindestens 35%. Sollte dieses Ziel nicht erreicht werden, verlängern wir Ihr Coaching kostenlos bis zum Erfolg. Dies basiert auf unserer Erfolgsquote von 92% bei über 500 analysierten Cases im letzten Jahr[9][10].",
  },
  {
    question: "Wie sicher sind meine Daten und Trading-Strategien?",
    answer:
      "Wir nutzen Bank-Level-Sicherheit (256-Bit AES-Verschlüsselung) mit Zwei-Faktor-Authentifizierung. Ihre Trading-Journale und Strategien werden ausschließlich auf deutschen Servern gespeichert (GDPR-konform). Für Elite-Mitglieder bieten wir optional einen vollständig offline nutzbaren Workspace mit physischem Security-Key. Drittfirmen erhalten keinerlei Zugriff auf Ihre Daten - selbst unsere Mentoren sehen nur anonymisierte Performance-Kennzahlen[11][12].",
  },
  {
    question: "Welche Zahlungsoptionen stehen zur Verfügung?",
    answer:
      "Neben Kreditkarte und PayPal bieten wir für Jahresabos SEPA-Lastschrift und für Elite-Mitglieder sogar Kryptowährungen (BTC/ETH). Unternehmenskunden können Rechnungszahlung (netto 14 Tage) nutzen. Alle Preise sind inkl. 19% MwSt. - eine Umsatzsteuer-ID können Sie bei der Anmeldung hinterlegen. Pro-Tarife lassen sich jederzeit pausieren (max. 3 Monate/Jahr), Elite-Abos sind durch die Erfolgsgarantie abgesichert[13][14].",
  },
];

export function FrequentlyAskedQuestions() {
  const [open, setOpen] = React.useState<string | null>(null);

  return (
    <div className="w-full max-w-7xl mx-auto my-10 md:my-20 py-10 md:py-20 px-4 md:px-8">
      <div className="text-balance relative z-20 mx-auto mb-4 max-w-4xl text-center">
        <h2
          className={cn(
            "inline-block text-3xl md:text-6xl bg-[radial-gradient(61.17%_178.53%_at_38.83%_-13.54%,#3B3B3B_0%,#888787_12.61%,#FFFFFF_50%,#888787_80%,#3B3B3B_100%)]",
            "bg-clip-text text-transparent"
          )}
        >
          Häufige Fragen
        </h2>
      </div>
      <p className="max-w-lg text-sm  text-center mx-auto mt-4 text-neutral-400 px-4 md:px-0">
      Hier findest Du eine Übersicht der häufigsten Fragen. Solltest Du eine spezifische Frage haben oder Anregungen, kontaktiere uns gerne per E-Mail.
      </p>
      <div className="mt-10 md:mt-10 max-w-3xl mx-auto divide-y divide-neutral-800">
        {FAQs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            open={open}
            setOpen={setOpen}
          />
        ))}
      </div>
    </div>
  );
}

const FAQItem = ({
  question,
  answer,
  setOpen,
  open,
}: {
  question: string;
  answer: string;
  open: string | null;
  setOpen: (open: string | null) => void;
}) => {
  const isOpen = open === question;

  return (
    <motion.div
      className="cursor-pointer py-4 md:py-6"
      onClick={() => {
        if (isOpen) {
          setOpen(null);
        } else {
          setOpen(question);
        }
      }}
    >
      <div className="flex items-start justify-between">
        <div className="pr-8 md:pr-12">
          <h3 className="text-base md:text-lg font-medium text-neutral-200">
            {question}
          </h3>
          <AnimatePresence mode="wait">
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="overflow-hidden text-sm md:text-base text-neutral-400 mt-2"
              >
                <p>{answer}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="relative mr-2 md:mr-4 mt-1 h-5 w-5 md:h-6 md:w-6 flex-shrink-0">
          <motion.div
            animate={{
              scale: isOpen ? [0, 1] : [1, 0, 1],
              rotate: isOpen ? 90 : 0,
              marginLeft: isOpen ? "1.5rem" : "0rem",
            }}
            initial={{ scale: 0 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.2 }}
          >
            <IconArrowRight className="absolute inset-0 h-5 w-5 md:h-6 md:w-6 transform text-white-500" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
