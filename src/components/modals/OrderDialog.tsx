import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';
import { OrderForm } from '../sections/types';

interface OrderDialogProps {
  orderForm: OrderForm | null;
  onClose: () => void;
  onUpdateForm: (form: OrderForm) => void;
  onSubmit: () => void;
  calculateTotal: () => number;
}

const OrderDialog = ({ orderForm, onClose, onUpdateForm, onSubmit, calculateTotal }: OrderDialogProps) => {
  return (
    <Dialog open={!!orderForm} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Оформить заказ</DialogTitle>
        </DialogHeader>
        {orderForm?.cake && (
          <div className="space-y-4">
            <div className="bg-muted/50 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">{orderForm.cake.name}</h3>
              <p className="text-sm text-muted-foreground mb-3">{orderForm.cake.description}</p>
              <div className="text-primary font-bold">{orderForm.cake.pricePerKg} ₽ за кг</div>
            </div>
            
            <div>
              <label className="text-sm font-medium">Вес торта (кг)</label>
              <Input
                type="number"
                min="0.5"
                step="0.5"
                value={orderForm.weight}
                onChange={(e) => onUpdateForm({ ...orderForm, weight: Number(e.target.value) })}
                className="mt-1"
              />
            </div>

            <div className="bg-primary/10 p-3 rounded-lg">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Итого:</span>
                <span className="text-2xl font-bold text-primary">{calculateTotal()} ₽</span>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium">Ваше имя</label>
              <Input
                value={orderForm.name}
                onChange={(e) => onUpdateForm({ ...orderForm, name: e.target.value })}
                placeholder="Иван Иванов"
                className="mt-1"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Телефон</label>
              <Input
                value={orderForm.phone}
                onChange={(e) => onUpdateForm({ ...orderForm, phone: e.target.value })}
                placeholder="+7 900 123-45-67"
                className="mt-1"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Комментарий (необязательно)</label>
              <Textarea
                value={orderForm.comment}
                onChange={(e) => onUpdateForm({ ...orderForm, comment: e.target.value })}
                placeholder="Дата, время доставки, пожелания..."
                className="mt-1"
                rows={3}
              />
            </div>

            <div className="flex gap-2 pt-4">
              <Button variant="outline" onClick={onClose} className="flex-1">
                Отмена
              </Button>
              <Button 
                onClick={onSubmit} 
                className="flex-1 bg-[#25D366] hover:bg-[#20BA5A] text-white gap-2"
                disabled={!orderForm.name || !orderForm.phone}
              >
                <Icon name="MessageCircle" size={18} />
                Отправить в WhatsApp
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default OrderDialog;
