import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';

import { ArrowButton } from '.';

import { DIRECTION } from '@/constants';

describe('ArrowButton', () => {
  test('오른쪽 화살표인 경우 버튼 누르면 왼쪽 화살표로 변한다', () => {
    // arrange
    const mockClick = jest.fn();

    render(<ArrowButton direction={DIRECTION.LEFT} onClick={mockClick} />);

    // act
    fireEvent.click(screen.getByRole('button'));

    // assert
  });
});
