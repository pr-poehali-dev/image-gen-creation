
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-white border-t py-6">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Icon name="Image" className="text-primary w-5 h-5" />
            <span className="font-semibold text-gray-700">MarketImage</span>
          </div>
          <div className="text-sm text-gray-500">
            © {new Date().getFullYear()} MarketImage. Все права защищены.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
