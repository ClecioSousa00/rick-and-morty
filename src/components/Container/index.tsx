type ContainerProps = {
  children: React.ReactNode
}

export const Container = ({ children }: ContainerProps) => {
  return (
    <div className="px-5 2xl:container lg:px-14 2xl:mx-auto">{children}</div>
  )
}
