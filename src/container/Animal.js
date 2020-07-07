import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AnimalFactList, AnimalSelect } from "component/animal";
import { Spinner } from "component/spinner";
import { fetchAnimal } from "store/animal/actions";

const Animal = () => {
  const dispatch = useDispatch();

  const animal = useSelector((root) => root.animal);

  const [selectedAnimal, setSelectedAnimal] = useState("");

  useEffect(() => {
    if (!selectedAnimal) return;

    !animal[selectedAnimal] && dispatch(fetchAnimal(selectedAnimal));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedAnimal]);

  return (
    <>
      <AnimalSelect
        selectedAnimal={selectedAnimal}
        setSelectedAnimal={setSelectedAnimal}
      />

      {animal.fetchStatus === "fetching" && <Spinner />}

      {selectedAnimal && animal[selectedAnimal] && (
        <AnimalFactList animalFacts={animal[selectedAnimal]} />
      )}
    </>
  );
};

export default Animal;
