import { createFileRoute, Link, useNavigate } from '@tanstack/react-router';
import { Card, TopBar, Typography } from '../../../common/components';
import { css } from '@emotion/react';
import LeftArrowIcon from '../../../assets/LeftArrowIcon.svg';
import FavIcon from '../../../assets/favoriteStarIcon.svg';

export const Route = createFileRoute('/booking/tickets/')({
  component: RouteComponent,
});

function RouteComponent() {
  // 가는 날(가는 길 버스를 선택하세요) 및 오는 날 페이지 구현하기
  //const selectTime = new Date(`AM 9:00`);

  return (
    <>
      <TopBar
        exitButton={
          <Link onClick={() => history.go(-1)}>
            <img src={LeftArrowIcon} />
          </Link>
        }
        centerSlot={
          <div>
            <div>동서울 → 부산해운대</div>
            <div>11월 27일 (수)</div>
          </div>
        }
        rightSlot={<img src={FavIcon} />}
      />
      <Typography variant="title1" as="p" cx={{ textAlign: 'center' }}>
        버스를 선택하세요
      </Typography>

      <div css={css({ display: 'flex', justifyContent: 'space-between' })}>
        <button>시간: 오전 9:00 이후</button>
        <button>검색조건</button>
      </div>

      <Card></Card>
      <Card></Card>
    </>
  );
}
