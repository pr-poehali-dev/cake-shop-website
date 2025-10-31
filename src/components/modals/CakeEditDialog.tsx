import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Cake } from '../sections/types';

interface CakeEditDialogProps {
  cake: Cake | null;
  onClose: () => void;
  onUpdate: (cake: Cake) => void;
  onSave: () => void;
}

const CakeEditDialog = ({ cake, onClose, onUpdate, onSave }: CakeEditDialogProps) => {
  return (
    <Dialog open={!!cake} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Редактировать торт</DialogTitle>
        </DialogHeader>
        {cake && (
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium">Название</label>
              <Input
                value={cake.name}
                onChange={(e) => onUpdate({ ...cake, name: e.target.value })}
                className="mt-1"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Описание</label>
              <Textarea
                value={cake.description}
                onChange={(e) => onUpdate({ ...cake, description: e.target.value })}
                className="mt-1"
                rows={3}
              />
            </div>
            <div>
              <label className="text-sm font-medium">Цена за кг (₽)</label>
              <Input
                type="number"
                value={cake.pricePerKg}
                onChange={(e) => onUpdate({ ...cake, pricePerKg: Number(e.target.value) })}
                className="mt-1"
              />
            </div>
            <div>
              <label className="text-sm font-medium">URL изображения</label>
              <Input
                value={cake.image}
                onChange={(e) => onUpdate({ ...cake, image: e.target.value })}
                className="mt-1"
              />
            </div>
            <div className="flex justify-end gap-2 pt-4">
              <Button variant="outline" onClick={onClose}>
                Отмена
              </Button>
              <Button onClick={onSave}>
                Сохранить
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default CakeEditDialog;
