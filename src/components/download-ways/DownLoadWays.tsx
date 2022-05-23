import { IframeDownLoad } from './IframeDownLoad';
import { FileRequestDownLoad } from './RequestDownLoad';
import { IframeType } from './IframeDownLoad';
import { FileRequestType } from './RequestDownLoad';

const UseDownLoad = () => {
  const IframeDownLoadWay = (obj: IframeType) => IframeDownLoad(obj);

  const FileRequestDownLoadWay = (obj: FileRequestType) => FileRequestDownLoad(obj);

  return {
    IframeDownLoadWay,
    FileRequestDownLoadWay,
  };
};

export default UseDownLoad;
