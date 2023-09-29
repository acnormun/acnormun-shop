import { styled } from "@/styles"


const Button = styled('button', {
  backgroundColor: '$pink700',
  color: "$white",
  borderRadius: 4,
  border: 0,
  padding: '4px 8px',

  '&:hover': {
    backgroundColor: "$pink500"
  },
})
export default function Home() {
  return (
    <Button>Alooo</Button>
  )
}
