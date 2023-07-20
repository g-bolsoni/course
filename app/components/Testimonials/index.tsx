
interface TestimonialsProps{
  videoUrl: string;
  videoTitle: string;
  testimonial?: string;
  color: "gray" | "white";
  invert? : boolean;
}

export function Testimonials(data:TestimonialsProps) {
  return (
    <div className={`bg-${data.color}`}>
        <div className="container mx-auto">
          <div className={`flex items-start justify-center gap-8 lg:gap-14 w-9/12 mx-auto py-12 flex-col lg:flex-row  ${data?.invert ? "lg:flex-row-reverse" : ""} `}>
            <div className="w-full lg:w-2/5 h-52 aspect-video">
                <iframe 
                    width="100%"
                    height="100%" 
                    src={data.videoUrl}
                    title={data.videoTitle}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                >
                </iframe>
            </div>
            <div className="w-full lg:w-3/5">
                {
                    data.testimonial ?
                    data.testimonial :
                    "Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a" 
                }
            </div>
          </div>
        </div>
    </div>
  )
}
  