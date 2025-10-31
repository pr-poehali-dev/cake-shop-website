import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const cakes = [
    {
      id: 1,
      name: 'Шоколадный Велюр',
      description: 'Нежный шоколадный бисквит с хрустящим слоем пралине и бельгийским шоколадом',
      pricePerKg: 3500,
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80'
    },
    {
      id: 2,
      name: 'Малиновый Мусс',
      description: 'Воздушный ванильный мусс с малиновым конфи и миндальной основой',
      pricePerKg: 3200,
      image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=600&q=80'
    },
    {
      id: 3,
      name: 'Фисташковое Искушение',
      description: 'Фисташковый бисквит с кремом из сицилийских фисташек и белым шоколадом',
      pricePerKg: 4000,
      image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&q=80'
    },
    {
      id: 4,
      name: 'Карамельный Сон',
      description: 'Нежный бисквит с соленой карамелью, орехами пекан и кремом маскарпоне',
      pricePerKg: 3300,
      image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=600&q=80'
    },
    {
      id: 5,
      name: 'Тирамису Классик',
      description: 'Итальянская классика: савоярди, крем маскарпоне, кофе и какао',
      pricePerKg: 2800,
      image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&q=80'
    },
    {
      id: 6,
      name: 'Ягодная Симфония',
      description: 'Легкий бисквит с муссом из клубники, черники и ежевики',
      pricePerKg: 3400,
      image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&q=80'
    }
  ];

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-secondary/10 to-muted/20">
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-border/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-foreground">Délice</h1>
            <div className="hidden md:flex gap-8">
              {['home', 'catalog', 'delivery', 'contacts'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === section ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'catalog' && 'Каталог'}
                  {section === 'delivery' && 'Доставка'}
                  {section === 'contacts' && 'Контакты'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-5xl text-center animate-fade-in">
          <h2 className="text-6xl md:text-7xl font-bold mb-6 text-foreground">
            Авторские торты
            <br />
            <span className="text-primary">ручной работы</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Создаём десерты, которые становятся главным украшением вашего праздника
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-full"
            onClick={() => scrollToSection('catalog')}
          >
            Посмотреть каталог
          </Button>
        </div>
      </section>

      <section id="catalog" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl font-bold text-center mb-4 text-foreground">Наши торты</h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">
            Каждый торт создаётся с любовью из натуральных ингредиентов
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cakes.map((cake, index) => (
              <Card
                key={cake.id}
                className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={cake.image}
                    alt={cake.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-3 text-foreground">{cake.name}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{cake.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{cake.pricePerKg} ₽</span>
                    <span className="text-sm text-muted-foreground">за кг</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="delivery" className="py-20 px-4">
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
              <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
                <Icon name="MessageCircle" size={24} />
                WhatsApp
              </a>
            </Button>
            <Button
              size="lg"
              className="bg-[#0088cc] hover:bg-[#006699] text-white px-8 py-6 text-lg rounded-full gap-3 min-w-[200px]"
              asChild
            >
              <a href="https://t.me/" target="_blank" rel="noopener noreferrer">
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

      <footer className="bg-foreground/5 py-8 px-4 border-t border-border/50">
        <div className="container mx-auto text-center text-muted-foreground text-sm">
          <p>© 2024 Délice. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
