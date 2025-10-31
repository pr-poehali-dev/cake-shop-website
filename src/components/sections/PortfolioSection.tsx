import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { PortfolioImage } from './types';

interface PortfolioSectionProps {
  portfolioImages: PortfolioImage[];
  isAdmin: boolean;
  onAddImage: () => void;
  onEditImage: (image: PortfolioImage) => void;
  onDeleteImage: (id: number) => void;
}

const PortfolioSection = ({
  portfolioImages,
  isAdmin,
  onAddImage,
  onEditImage,
  onDeleteImage
}: PortfolioSectionProps) => {
  return (
    <section id="portfolio" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-5xl font-bold text-foreground">Наши работы</h2>
          {isAdmin && (
            <Button onClick={onAddImage} className="gap-2">
              <Icon name="Plus" size={20} />
              Добавить фото
            </Button>
          )}
        </div>
        <p className="text-center text-muted-foreground mb-16 text-lg">
          Посмотрите, какие торты мы создали для наших клиентов
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioImages.map((image) => (
            <div key={image.id} className="overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group relative">
              {isAdmin && (
                <div className="absolute top-2 right-2 z-10 flex gap-2">
                  <Button
                    size="sm"
                    variant="secondary"
                    onClick={() => onEditImage(image)}
                    className="bg-white/90 hover:bg-white"
                  >
                    <Icon name="Edit" size={16} />
                  </Button>
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => onDeleteImage(image.id)}
                    className="bg-red-500/90 hover:bg-red-600"
                  >
                    <Icon name="Trash2" size={16} />
                  </Button>
                </div>
              )}
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
