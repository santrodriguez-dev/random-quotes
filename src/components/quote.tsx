export const Quote = ({ quote }: { quote: string }) => {

  return <div class="relative">
    <div class="absolute w-1 h-full bg-yellow-500"></div>
    <p class="pl-24 text-[36px]">“{quote}”</p>
  </div>
};

