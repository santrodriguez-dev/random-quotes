interface Props {
  width?: number
  color?: string
}

export const RigthArrow = ({ width = 30, color = '#fff' }: Props) => {
  return (
    <svg class="text-white" width={`${width}px`} viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg">
      <polyline data-name="Right" fill="none" id="Right-2" points="16.4 7 21.5 12 16.4 17" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
      <line fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="2.5" x2="19.2" y1="12" y2="12" />
    </svg>
  )
}

export const BackArrow = ({ width = 30, color = '#fff' }: Props) => {
  return (
    <svg class="text-white" xmlns="http://www.w3.org/2000/svg" width={`${width}px`} viewBox="0 0 24 24">
      <polyline data-name="Right" fill="none" id="Right-2" points="7.6 7 2.5 12 7.6 17" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
      <line fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="21.5" x2="4.8" y1="12" y2="12" />
    </svg>
  )
}