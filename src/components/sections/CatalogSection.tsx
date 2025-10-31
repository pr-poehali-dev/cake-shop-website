import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Cake } from './types';

interface CatalogSectionProps {
  cakes: Cake[];
  isAdmin: boolean;
  onAddCake: () => void;
  onEditCake: (cake: Cake) => void;
  onDeleteCake: (id: number) => void;
  onOrderCake: (cake: Cake) => void;
}

const CatalogSection = ({
  cakes,
  isAdmin,
  onAddCake,
  onEditCake,
  onDeleteCake,
  onOrderCake
}: CatalogSectionProps) => {
  return (
    <section id="catalog" className="py-20 px-4 bg-white/50">
      <div className="container mx-auto max-w-6xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-5xl font-bold text-foreground">Наши торты</h2>
          {isAdmin && (
            <Button onClick={onAddCake} className="gap-2">
              <Icon name="Plus" size={20} />
              Добавить торт
            </Button>
          )}
        </div>
        <p className="text-center text-muted-foreground mb-16 text-lg">
          Каждый торт создаётся с любовью из натуральных ингредиентов
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cakes.map((cake, index) => (
            <Card
              key={cake.id}
              className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-scale-in relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {isAdmin && (
                <div className="absolute top-2 right-2 z-10 flex gap-2">
                  <Button
                    size="sm"
                    variant="secondary"
                    onClick={() => onEditCake(cake)}
                    className="bg-white/90 hover:bg-white"
                  >
                    <Icon name="Edit" size={16} />
                  </Button>
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => onDeleteCake(cake.id)}
                    className="bg-red-500/90 hover:bg-red-600"
                  >
                    <Icon name="Trash2" size={16} />
                  </Button>
                </div>
              )}
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
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-primary">{cake.pricePerKg} ₽</span>
                  <span className="text-sm text-muted-foreground">за кг</span>
                </div>
                {!isAdmin && (
                  <Button 
                    onClick={() => onOrderCake(cake)} 
                    className="w-full bg-primary hover:bg-primary/90"
                  >
                    Заказать
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CatalogSection;
