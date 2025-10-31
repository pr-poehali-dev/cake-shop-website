import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface NavigationProps {
  activeSection: string;
  isAdmin: boolean;
  onSectionChange: (section: string) => void;
  onAdminToggle: () => void;
}

const Navigation = ({ activeSection, isAdmin, onSectionChange, onAdminToggle }: NavigationProps) => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-border/50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-foreground">Délice</h1>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex gap-8">
              {['home', 'catalog', 'portfolio', 'delivery', 'contacts'].map((section) => (
                <button
                  key={section}
                  onClick={() => onSectionChange(section)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === section ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'catalog' && 'Каталог'}
                  {section === 'portfolio' && 'Портфолио'}
                  {section === 'delivery' && 'Доставка'}
                  {section === 'contacts' && 'Контакты'}
                </button>
              ))}
            </div>
            <Button
              variant={isAdmin ? "default" : "outline"}
              size="sm"
              onClick={onAdminToggle}
            >
              <Icon name={isAdmin ? "Lock" : "Unlock"} size={16} />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
