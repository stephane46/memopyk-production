import { useLanguage } from "@/hooks/use-language";

export function ContactSection() {
  const { language } = useLanguage();

  return (
    <section className="py-20 bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-memopyk-navy mb-6">
            {language === 'fr' ? 'Commencez votre projet' : 'Start your project'}
          </h2>
          <p className="text-xl text-memopyk-blue">
            {language === 'fr' 
              ? 'Prêt à transformer vos souvenirs en film ?'
              : 'Ready to transform your memories into a film?'
            }
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-memopyk-navy mb-2">
                  {language === 'fr' ? 'Prénom' : 'First name'}
                </label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-memopyk-orange focus:border-transparent"
                  placeholder={language === 'fr' ? 'Votre prénom' : 'Your first name'}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-memopyk-navy mb-2">
                  {language === 'fr' ? 'Nom' : 'Last name'}
                </label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-memopyk-orange focus:border-transparent"
                  placeholder={language === 'fr' ? 'Votre nom' : 'Your last name'}
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-memopyk-navy mb-2">Email</label>
              <input 
                type="email" 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-memopyk-orange focus:border-transparent"
                placeholder={language === 'fr' ? 'votre@email.com' : 'your@email.com'}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-memopyk-navy mb-2">
                {language === 'fr' ? 'Message' : 'Message'}
              </label>
              <textarea 
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-memopyk-orange focus:border-transparent"
                placeholder={language === 'fr' ? 'Décrivez votre projet...' : 'Describe your project...'}
              />
            </div>
            
            <div className="text-center">
              <button 
                type="submit"
                className="bg-memopyk-orange hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
              >
                {language === 'fr' ? 'Envoyer ma demande' : 'Send my request'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;