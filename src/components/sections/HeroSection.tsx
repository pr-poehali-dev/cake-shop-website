import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  onCatalogClick: () => void;
}

const HeroSection = ({ onCatalogClick }: HeroSectionProps) => {
  return (
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
          onClick={onCatalogClick}
        >
          Посмотреть каталог
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
