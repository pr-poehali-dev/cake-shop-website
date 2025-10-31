import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { PortfolioImage } from '../sections/types';

interface PortfolioEditDialogProps {
  image: PortfolioImage | null;
  onClose: () => void;
  onUpdate: (image: PortfolioImage) => void;
  onSave: () => void;
}

const PortfolioEditDialog = ({ image, onClose, onUpdate, onSave }: PortfolioEditDialogProps) => {
  return (
    <Dialog open={!!image} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Редактировать фото</DialogTitle>
        </DialogHeader>
        {image && (
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium">URL изображения</label>
              <Input
                value={image.url}
                onChange={(e) => onUpdate({ ...image, url: e.target.value })}
                placeholder="https://..."
                className="mt-1"
              />
              <p className="text-xs text-muted-foreground mt-1">
                Загрузите фото на любой хостинг и вставьте ссылку
              </p>
            </div>
            <div>
              <label className="text-sm font-medium">Описание</label>
              <Input
                value={image.alt}
                onChange={(e) => onUpdate({ ...image, alt: e.target.value })}
                placeholder="Описание торта"
                className="mt-1"
              />
            </div>
            {image.url && (
              <div>
                <label className="text-sm font-medium block mb-2">Предпросмотр</label>
                <img 
                  src={image.url} 
                  alt="preview" 
                  className="w-full h-48 object-cover rounded-lg"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="100"%3E%3Crect fill="%23ddd" width="100" height="100"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" dy=".3em" fill="%23999"%3EНет фото%3C/text%3E%3C/svg%3E';
                  }}
                />
              </div>
            )}
            <div className="flex justify-end gap-2 pt-4">
              <Button variant="outline" onClick={onClose}>
                Отмена
              </Button>
              <Button onClick={onSave} disabled={!image.url}>
                Сохранить
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default PortfolioEditDialog;
