import { styled } from "@/styles"


const Button = styled('button', {
  backgroundColor: '$dark_green',
  borderRadius: 4,
  border: 0,
  padding: '4px 8px',

  '&:hover': {
    backgroundColor: "$green"
  },
})
export default function Home() {
  return (
    <Button>Alooo</Button>
  )
}
