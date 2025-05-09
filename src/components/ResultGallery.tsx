
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

// Пример данных для галереи 
const sampleImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1000",
    prompt: "Профессиональное фото красной женской сумки на белом фоне, вид спереди",
    marketplace: "Wildberries",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?q=80&w=1000",
    prompt: "Черный кожаный кошелек, детальное изображение с текстурой, студийный свет",
    marketplace: "Ozon",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1560343090-f0409e92791a?q=80&w=1000",
    prompt: "Мужские кроссовки белого цвета на нейтральном фоне, вид сбоку",
    marketplace: "Яндекс.Маркет",
  },
];

interface GalleryProps {
  isVisible: boolean;
}

const ResultGallery = ({ isVisible }: GalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  if (!isVisible) return null;

  return (
    <div className="mt-8 animate-fade-in">
      <h2 className="text-2xl font-semibold mb-4">Результаты генерации</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {sampleImages.map((image) => (
          <Card 
            key={image.id} 
            className={`overflow-hidden cursor-pointer transition-all duration-200 ${selectedImage === image.id ? 'ring-2 ring-primary' : 'hover:shadow-lg'}`}
            onClick={() => setSelectedImage(image.id)}
          >
            <div className="relative aspect-square">
              <img
                src={image.url}
                alt={image.prompt}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end">
                <div className="p-3 text-white w-full">
                  <div className="flex justify-between items-center w-full">
                    <span className="text-sm font-medium">
                      {image.marketplace}
                    </span>
                    <div className="flex gap-1">
                      <Button size="icon" variant="ghost" className="h-7 w-7 text-white">
                        <Icon name="Edit" className="h-4 w-4" />
                      </Button>
                      <Button size="icon" variant="ghost" className="h-7 w-7 text-white">
                        <Icon name="Download" className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-3">
              <p className="text-xs text-gray-500 line-clamp-2">{image.prompt}</p>
            </div>
          </Card>
        ))}
      </div>

      {selectedImage && (
        <div className="flex justify-center mt-6">
          <Button variant="outline" className="mr-2">
            <Icon name="Edit2" className="mr-2 h-4 w-4" />
            Редактировать
          </Button>
          <Button>
            <Icon name="Download" className="mr-2 h-4 w-4" />
            Скачать
          </Button>
        </div>
      )}
    </div>
  );
};

export default ResultGallery;
