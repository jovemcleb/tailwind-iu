import { User } from 'lucide-react';
import { useFileInput } from '../../../../hooks/useFileInput';
import { useMemo } from 'react';

export function ImagePreview() {
  const { files } = useFileInput();
  const previewURl = useMemo(() => {
    if (files.length === 0) {
      return null;
    }

    return URL.createObjectURL(files[0]);
  }, [files]);

  if (previewURl === null) {
    return (
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-violet-50">
        <User className="h-8 w-8 text-violet-500" />
      </div>
    );
  } else {
    return (
      <img
        src={previewURl}
        alt=""
        className="h-16 w-16 rounded-full object-cover"
      />
    );
  }
}
