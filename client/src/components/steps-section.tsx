import { useLanguage } from "@/hooks/use-language";

export function StepsSection() {
  const { language } = useLanguage();

  const steps = [
    {
      number: '01',
      titleFr: 'Téléchargez vos médias',
      titleEn: 'Upload your media',
      descriptionFr: 'Envoyez-nous vos photos et vidéos précieuses',
      descriptionEn: 'Send us your precious photos and videos'
    },
    {
      number: '02', 
      titleFr: 'Nous créons votre film',
      titleEn: 'We create your film',
      descriptionFr: 'Notre équipe monte un film professionnel',
      descriptionEn: 'Our team edits a professional film'
    },
    {
      number: '03',
      titleFr: 'Recevez votre création',
      titleEn: 'Receive your creation',
      descriptionFr: 'Votre film de mémoire est livré en haute qualité',
      descriptionEn: 'Your memory film is delivered in high quality'
    }
  ];

  return (
    <section className="py-20 bg-memopyk-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-memopyk-navy mb-6">
            {language === 'fr' ? 'Comment ça marche' : 'How it works'}
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="bg-memopyk-orange text-white rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center text-xl font-bold">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-memopyk-navy mb-4">
                {language === 'fr' ? step.titleFr : step.titleEn}
              </h3>
              <p className="text-memopyk-blue">
                {language === 'fr' ? step.descriptionFr : step.descriptionEn}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StepsSection;