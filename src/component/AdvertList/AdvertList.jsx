import Card from 'component/Card/Card';
import { ListWrapper, Message } from './AdvertList.styled';

const AdvertList = ({ list = [] }) => {
  return (
    <>
      {list.length ? (
        <ListWrapper>
          {list.map(item => (
            <Card key={`${item.make}_${Math.random(1)}`} car={item} />
          ))}
        </ListWrapper>
      ) : (
        <Message>
          Sorry, there are no cars with this request in stock...
        </Message>
      )}
    </>
  );
};

export default AdvertList;
