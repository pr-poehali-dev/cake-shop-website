import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const DeliverySection = () => {
  return (
    <section id="delivery" className="py-20 px-4 bg-white/50">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-5xl font-bold text-center mb-4 text-foreground">Доставка</h2>
        <Card className="p-8 md:p-12 border-0 shadow-xl bg-white/80 backdrop-blur">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Icon name="Truck" className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">Доставка по городу</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Доставка осуществляется по всему городу за отдельную плату. Стоимость зависит от
                  района и обговаривается индивидуально при оформлении заказа.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-accent/10 p-3 rounded-full">
                <Icon name="Clock" className="text-accent-foreground" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">Время доставки</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Принимаем заказы минимум за 48 часов. Доставляем в удобное для вас время с 9:00
                  до 21:00.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-secondary/30 p-3 rounded-full">
                <Icon name="Package" className="text-secondary-foreground" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">Упаковка</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Каждый торт упаковывается в специальную коробку с учётом безопасной
                  транспортировки.
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default DeliverySection;
