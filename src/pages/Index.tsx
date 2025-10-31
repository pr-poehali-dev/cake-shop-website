import { useState, useEffect } from 'react';
import Navigation from '@/components/sections/Navigation';
import HeroSection from '@/components/sections/HeroSection';
import CatalogSection from '@/components/sections/CatalogSection';
import PortfolioSection from '@/components/sections/PortfolioSection';
import DeliverySection from '@/components/sections/DeliverySection';
import ContactsSection from '@/components/sections/ContactsSection';
import OrderDialog from '@/components/modals/OrderDialog';
import CakeEditDialog from '@/components/modals/CakeEditDialog';
import PortfolioEditDialog from '@/components/modals/PortfolioEditDialog';
import { Cake, OrderForm, PortfolioImage } from '@/components/sections/types';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isAdmin, setIsAdmin] = useState(false);
  const [editingCake, setEditingCake] = useState<Cake | null>(null);
  const [orderForm, setOrderForm] = useState<OrderForm | null>(null);
  const [portfolioImages, setPortfolioImages] = useState<PortfolioImage[]>([
    {
      id: 1,
      url: 'https://cdn.poehali.dev/files/c7eeed4e-4c70-4108-ae2c-d3f613806c18.jpeg',
      alt: 'Белый торт с цветами Happy Birthday'
    },
    {
      id: 2,
      url: 'https://cdn.poehali.dev/files/75ab31b5-5da3-4ac8-831a-bf47eb8c3ff6.jpeg',
      alt: 'Торт в форме сердца с тюльпанами'
    },
    {
      id: 3,
      url: 'https://cdn.poehali.dev/files/c1eb4f91-c63b-4643-b28a-72ba731c69db.jpeg',
      alt: 'Торт 1 сентября с детьми'
    },
    {
      id: 4,
      url: 'https://cdn.poehali.dev/files/3feb9d52-c943-44ba-ad6c-6f62c5b99fc7.jpeg',
      alt: 'Розовый торт с бабочками Happy Birthday'
    },
    {
      id: 5,
      url: 'https://cdn.poehali.dev/files/c0ebdb55-aeb2-45d0-b4ed-da3258f255a5.jpeg',
      alt: 'Торт с короной С Днем Рождения'
    }
  ]);
  const [editingPortfolioImage, setEditingPortfolioImage] = useState<PortfolioImage | null>(null);
  const [cakes, setCakes] = useState<Cake[]>([
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
  ]);

  useEffect(() => {
    const savedCakes = localStorage.getItem('cakes');
    if (savedCakes) {
      setCakes(JSON.parse(savedCakes));
    }
    const savedPortfolio = localStorage.getItem('portfolioImages');
    if (savedPortfolio) {
      setPortfolioImages(JSON.parse(savedPortfolio));
    }
  }, []);

  const saveCakes = (newCakes: Cake[]) => {
    setCakes(newCakes);
    localStorage.setItem('cakes', JSON.stringify(newCakes));
  };

  const savePortfolio = (newImages: PortfolioImage[]) => {
    setPortfolioImages(newImages);
    localStorage.setItem('portfolioImages', JSON.stringify(newImages));
  };

  const handleEditCake = (cake: Cake) => {
    setEditingCake({ ...cake });
  };

  const handleSaveCake = () => {
    if (editingCake) {
      const updatedCakes = cakes.map(c => 
        c.id === editingCake.id ? editingCake : c
      );
      saveCakes(updatedCakes);
      setEditingCake(null);
    }
  };

  const handleAddCake = () => {
    const newCake: Cake = {
      id: Date.now(),
      name: 'Новый торт',
      description: 'Описание нового торта',
      pricePerKg: 3000,
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80'
    };
    saveCakes([...cakes, newCake]);
  };

  const handleDeleteCake = (id: number) => {
    const updatedCakes = cakes.filter(c => c.id !== id);
    saveCakes(updatedCakes);
  };

  const handleOrderCake = (cake: Cake) => {
    setOrderForm({
      cake,
      weight: 1,
      name: '',
      phone: '',
      comment: ''
    });
  };

  const calculateTotal = () => {
    if (!orderForm?.cake) return 0;
    return orderForm.cake.pricePerKg * orderForm.weight;
  };

  const handleSubmitOrder = () => {
    if (!orderForm?.cake || !orderForm.name || !orderForm.phone) return;
    
    const total = calculateTotal();
    const message = `🎂 Новый заказ\n\nТорт: ${orderForm.cake.name}\nВес: ${orderForm.weight} кг\nСтоимость: ${total} ₽\n\nКлиент: ${orderForm.name}\nТелефон: ${orderForm.phone}${orderForm.comment ? `\nКомментарий: ${orderForm.comment}` : ''}`;
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/79518313316?text=${encodedMessage}`, '_blank');
    
    setOrderForm(null);
  };

  const handleAddPortfolioImage = () => {
    const newImage: PortfolioImage = {
      id: Date.now(),
      url: '',
      alt: 'Новое фото'
    };
    setEditingPortfolioImage(newImage);
  };

  const handleEditPortfolioImage = (image: PortfolioImage) => {
    setEditingPortfolioImage({ ...image });
  };

  const handleSavePortfolioImage = () => {
    if (!editingPortfolioImage) return;
    
    const existingIndex = portfolioImages.findIndex(img => img.id === editingPortfolioImage.id);
    let updatedImages: PortfolioImage[];
    
    if (existingIndex >= 0) {
      updatedImages = portfolioImages.map(img => 
        img.id === editingPortfolioImage.id ? editingPortfolioImage : img
      );
    } else {
      updatedImages = [...portfolioImages, editingPortfolioImage];
    }
    
    savePortfolio(updatedImages);
    setEditingPortfolioImage(null);
  };

  const handleDeletePortfolioImage = (id: number) => {
    const updatedImages = portfolioImages.filter(img => img.id !== id);
    savePortfolio(updatedImages);
  };

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-secondary/10 to-muted/20">
      <Navigation
        activeSection={activeSection}
        isAdmin={isAdmin}
        onSectionChange={scrollToSection}
        onAdminToggle={() => setIsAdmin(!isAdmin)}
      />

      <HeroSection onCatalogClick={() => scrollToSection('catalog')} />

      <CatalogSection
        cakes={cakes}
        isAdmin={isAdmin}
        onAddCake={handleAddCake}
        onEditCake={handleEditCake}
        onDeleteCake={handleDeleteCake}
        onOrderCake={handleOrderCake}
      />

      <PortfolioSection
        portfolioImages={portfolioImages}
        isAdmin={isAdmin}
        onAddImage={handleAddPortfolioImage}
        onEditImage={handleEditPortfolioImage}
        onDeleteImage={handleDeletePortfolioImage}
      />

      <DeliverySection />

      <ContactsSection />

      <footer className="bg-foreground/5 py-8 px-4 border-t border-border/50">
        <div className="container mx-auto text-center text-muted-foreground text-sm">
          <p>© 2024 Délice. Все права защищены.</p>
        </div>
      </footer>

      <OrderDialog
        orderForm={orderForm}
        onClose={() => setOrderForm(null)}
        onUpdateForm={setOrderForm}
        onSubmit={handleSubmitOrder}
        calculateTotal={calculateTotal}
      />

      <CakeEditDialog
        cake={editingCake}
        onClose={() => setEditingCake(null)}
        onUpdate={setEditingCake}
        onSave={handleSaveCake}
      />

      <PortfolioEditDialog
        image={editingPortfolioImage}
        onClose={() => setEditingPortfolioImage(null)}
        onUpdate={setEditingPortfolioImage}
        onSave={handleSavePortfolioImage}
      />
    </div>
  );
};

export default Index;
