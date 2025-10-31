import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const ContactsSection = () => {
  return (
    <section id="contacts" className="py-20 px-4 bg-white/50">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-5xl font-bold mb-4 text-foreground">Контакты</h2>
        <p className="text-muted-foreground mb-12 text-lg">
          Свяжитесь с нами удобным способом для оформления заказа
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button
            size="lg"
            className="bg-[#25D366] hover:bg-[#20BA5A] text-white px-8 py-6 text-lg rounded-full gap-3 min-w-[200px]"
            asChild
          >
            <a href="https://wa.me/79518313316" target="_blank" rel="noopener noreferrer">
              <Icon name="MessageCircle" size={24} />
              WhatsApp
            </a>
          </Button>
          <Button
            size="lg"
            className="bg-[#0088cc] hover:bg-[#006699] text-white px-8 py-6 text-lg rounded-full gap-3 min-w-[200px]"
            asChild
          >
            <a href="https://t.me/+79518313316" target="_blank" rel="noopener noreferrer">
              <Icon name="Send" size={24} />
              Telegram
            </a>
          </Button>
        </div>
        <p className="mt-12 text-muted-foreground text-sm">
          Режим работы: ежедневно с 9:00 до 21:00
        </p>
      </div>
    </section>
  );
};

export default ContactsSection;
