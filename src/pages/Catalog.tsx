import { useEffect, useState } from 'react';
import { Flex } from 'antd';
import { Layout } from '../components/layout/Layout';
import { ProductCard } from '../components/productCard/ProductCard';
import { error } from 'console';
import { BASE_URL } from '../utils/constants';

interface CharacterProps {
  id: string;
  name: string;
  title: string;
  vision: string;
  weapon: string;
  gender: string;
  nation: string;
  rarity: number;
  birthday: string;
  description: string;
}

export const Catalog = () => {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [characters, setCharacters] = useState<CharacterProps[]>([]);

  useEffect(() => {
    fetch(`${BASE_URL}/all`)
      .then((res) => res.json())
      .then((data) => {
        const filteredCharacters = data.map((character: any) => ({
          id: character.id,
          name: character.name,
          title: character.title,
          vision: character.vision,
          weapon: character.weapon,
          gender: character.gender,
          nation: character.nation,
          rarity: character.rarity,
          birthday: character.birthday,
          description: character.description,
        }));
        setCharacters(filteredCharacters);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  console.log(isLoading);

  return (
    <Layout>
      <Flex wrap justify='center' align='center' gap='large'>
        {characters.map((el) => (
          <ProductCard
            key={el.id}
            name={el.name}
            img={`${BASE_URL}/${el.id}/icon-big`}
            birthday={el.birthday}
            loading={isLoading}
          />
        ))}
      </Flex>
    </Layout>
  );
};
