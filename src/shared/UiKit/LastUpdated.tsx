import { Clock } from 'lucide-react';
import type { FC } from 'react';
{
  /* <Clock strokeWidth={3} /> */
}
const LastUpdated: FC<{ value: string }> = ({ value }) => {
  return (
    <div className="text-12 flex text-neutral-500 items-center gap-[4px]">
      <div>
        <Clock size={12} strokeWidth={3} />
      </div>
      <div>Last updated: {value}</div>
    </div>
  );
};

export default LastUpdated;
