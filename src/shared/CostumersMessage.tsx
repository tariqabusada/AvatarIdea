
type Props = {
    content: string,
    name: string,
    address: string,
    img: string
}

const CostumersMessage = ({content, name, address, img}: Props) => {
    return(
        <div className="bg-primary-300 w-1/2 h-80 border-8 border-white p-6">
                <h1 className="text-primary-500 text-9xl absolute">"</h1>
                <p className="text-white mt-16 h-28">{content}</p>
                <div className="flex gap-4 mt-4">
                  <img src={img} className="rounded-full w-14 h-14" />
                  <div className="my-auto">
                    <p className="text-white">{name}</p>
                    <p className="text-gray-20">{address}</p>
                  </div>
                </div>
                </div>
    )

}

export default CostumersMessage;