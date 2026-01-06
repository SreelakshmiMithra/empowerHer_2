import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

// Add 3-5 nice placeholder images from Unsplash
const images = [
  "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=600&q=80", // laptop workspace
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80", // ocean sunset
  "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80", // mountain
  "https://images.unsplash.com/photo-1581092334472-2d03abf0a50f?auto=format&fit=crop&w=600&q=80", // coffee
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80", // forest
];

export default function ImageSlideshow() {
  const [index, setIndex] = useState(0);

  return (
    <Card className="p-4 mb-6">
      <CardContent className="text-center space-y-4">
        <h2 className="text-xl font-bold">Image Slideshow</h2>

        <img
          src={images[index]}
          alt={`Slide ${index + 1}`}
          className="mx-auto rounded-lg shadow-md max-h-96 object-cover"
        />

        <div className="flex justify-center gap-4 mt-2">
          <Button
            onClick={() => setIndex((index - 1 + images.length) % images.length)}
          >
            Previous
          </Button>
          <Button
            onClick={() => setIndex((index + 1) % images.length)}
          >
            Next
          </Button>
        </div>

        <p className="text-sm text-muted-foreground">
          Slide {index + 1} of {images.length}
        </p>
      </CardContent>
    </Card>
  );
}
