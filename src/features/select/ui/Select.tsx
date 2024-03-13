import { useEffect, useRef, useState } from 'react';
import arrow from '../../../../public/arrow.svg';
import { Circle } from '../../../shared/ui/circle';
import { Props, Response } from '../model/types';
import css from './Select.module.css';

export const Select = ({ options, title }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<
    Response['data'][0] | null
  >(null);
  const selectInput = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        !selectInput.current?.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  const toggleSelect = () => {
    setIsOpen(prev => !prev);
  };

  const handleOptionClick = (option: Response['data'][0]) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter') {
      setIsOpen(prev => !prev);
    }
  };

  return (
    <div className={css.select} onKeyDown={handleKeyDown}>
      <h2 className={css.title}>{title}</h2>
      <div
        ref={selectInput}
        tabIndex={0}
        className={css.selected}
        onClick={toggleSelect}
      >
        <div>
          {selectedOption
            ? `${selectedOption.last_name} ${selectedOption.first_name}, ${selectedOption.job}`
            : 'Выберите пользователя'}
        </div>
        <img src={arrow} alt='arrow' width={10} />
      </div>
      {isOpen && (
        <div ref={dropdownRef} className={css.items}>
          {options.map(option => (
            <div
              key={option.id}
              tabIndex={0}
              className={css.item}
              onClick={() => handleOptionClick(option)}
            >
              <Circle
                height={'16px'}
                width={'16px'}
                bgcolor={'#4971ff'}
                color={'#fff'}
                fz={'10px'}
                text={`${option.last_name[0]}`}
                mr={'8px'}
              />
              {`${option.last_name} ${option.first_name}, ${option.job}`}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
