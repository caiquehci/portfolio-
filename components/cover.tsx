import Image from 'next/image'
import { getImagesForProject } from '@/lib/portfolio-images'

type CoverProps = {
  title: string
  index: string
  slug?: string
}

export function Cover({ title, index, slug }: CoverProps) {
  // chave usada para localizar a pasta: preferimos slug, se existir
  const key = slug ?? title
  const images = getImagesForProject(key)
  const thumb = images.length > 0 ? images[0] : null

  return (
    <div className="relative flex aspect-[16/10] items-end bg-muted p-4">
      {thumb ? (
        <div className="absolute inset-0 -z-10">
          <div className="relative h-full w-full">
            <Image
              src={encodeURI(thumb)}
              alt={title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover"
              priority={false}
            />
          </div>
        </div>
      ) : null}

      <p className="text-sm text-muted-foreground z-10">
        {index} · {title}
      </p>
    </div>
  )
}
