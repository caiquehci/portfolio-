import Image from 'next/image'

type CoverProps = {
  title: string
  index: string
  imageUrl?: string // Agora passamos o caminho da imagem direto aqui
}

export function Cover({ title, imageUrl }: CoverProps) {
  return (
    <div className="relative flex w-full min-h-[250px] aspect-[16/10] items-end bg-gray-200 p-4 overflow-hidden rounded-lg">
      {imageUrl ? (
        <div className="absolute inset-0">
          <Image
            src={imageUrl}
            alt={title}
            fill
            sizes="(max-width: 640px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      ) : null}
    </div>
  )
}
