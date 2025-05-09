
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const NewImageButton = () => {
  return (
    <div className="fixed bottom-6 right-6">
      <Button size="lg" className="rounded-full shadow-xl flex items-center justify-center gap-2">
        <Icon name="Plus" className="h-5 w-5" />
        <span>Новое изображение</span>
      </Button>
    </div>
  );
};

export default NewImageButton;
