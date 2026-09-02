type CoverProps = {
  title: string
  index: string
}

export function Cover({ title, index }: CoverProps) {
  return (
    <div className="flex aspect-[16/10] items-end bg-muted p-4">
      <p className="text-sm text-muted-foreground">
        {index} · {title}
      </p>
    </div>
  )
}
