
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-white border-b shadow-sm py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Icon name="Image" className="text-primary w-6 h-6" />
          <h1 className="text-xl font-bold text-primary">MarketImage</h1>
        </div>
        <nav className="hidden md:flex gap-6">
          <a href="#" className="text-gray-600 hover:text-primary transition-colors">Главная</a>
          <a href="#" className="text-gray-600 hover:text-primary transition-colors">Примеры</a>
          <a href="#" className="text-gray-600 hover:text-primary transition-colors">FAQ</a>
        </nav>
        <Button variant="outline" className="hidden md:flex">
          <Icon name="User" className="mr-2 h-4 w-4" /> Войти
        </Button>
        <Button size="icon" variant="ghost" className="md:hidden">
          <Icon name="Menu" />
        </Button>
      </div>
    </header>
  );
};

export default Header;
