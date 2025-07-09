import { useLanguage } from "@/hooks/use-language";

export function FaqSection() {
  const { language } = useLanguage();

  const faqs = [
    {
      questionFr: "Combien de temps faut-il pour créer un film ?",
      questionEn: "How long does it take to create a film?",
      answerFr: "En général, nous livrons votre film en 5-7 jours ouvrables après réception de vos médias.",
      answerEn: "Generally, we deliver your film in 5-7 business days after receiving your media."
    },
    {
      questionFr: "Quels formats de fichiers acceptez-vous ?",
      questionEn: "What file formats do you accept?",
      answerFr: "Nous acceptons la plupart des formats photo (JPG, PNG, HEIC) et vidéo (MP4, MOV, AVI).",
      answerEn: "We accept most photo formats (JPG, PNG, HEIC) and video formats (MP4, MOV, AVI)."
    },
    {
      questionFr: "Puis-je demander des révisions ?",
      questionEn: "Can I request revisions?",
      answerFr: "Oui, nous offrons jusqu'à 2 révisions gratuites pour chaque projet.",
      answerEn: "Yes, we offer up to 2 free revisions for each project."
    },
    {
      questionFr: "Quel est le prix d'un film de mémoire ?",
      questionEn: "What is the price of a memory film?",
      answerFr: "Nos tarifs varient selon la durée et la complexité. Contactez-nous pour un devis personnalisé.",
      answerEn: "Our prices vary according to duration and complexity. Contact us for a personalized quote."
    },
    {
      questionFr: "Livrez-vous à l'international ?",
      questionEn: "Do you deliver internationally?",
      answerFr: "Oui, nous livrons nos films numériques partout dans le monde.",
      answerEn: "Yes, we deliver our digital films worldwide."
    }
  ];

  return (
    <section className="py-20 bg-memopyk-cream">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-memopyk-navy mb-6">
            {language === 'fr' ? 'Questions fréquentes' : 'Frequently asked questions'}
          </h2>
          <p className="text-xl text-memopyk-blue">
            {language === 'fr' 
              ? 'Trouvez les réponses à vos questions les plus courantes'
              : 'Find answers to your most common questions'
            }
          </p>
        </div>
        
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-lg font-semibold text-memopyk-navy mb-3">
                {language === 'fr' ? faq.questionFr : faq.questionEn}
              </h3>
              <p className="text-memopyk-blue">
                {language === 'fr' ? faq.answerFr : faq.answerEn}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-memopyk-blue mb-4">
            {language === 'fr' 
              ? 'Vous avez d\'autres questions ?'
              : 'Do you have other questions?'
            }
          </p>
          <a 
            href="#contact" 
            className="bg-memopyk-orange hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            {language === 'fr' ? 'Contactez-nous' : 'Contact us'}
          </a>
        </div>
      </div>
    </section>
  );
}

export default FaqSection;