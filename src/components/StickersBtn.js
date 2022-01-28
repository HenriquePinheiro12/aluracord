import React from 'react';
import { Box, Button, Text, Image } from '@skynexui/components';
import appConfig from '../../config.json';

export function StickersBtn(props) {
  const [isOpen, setOpenState] = React.useState('');

  return (
    <Box
      styleSheet={{
        position: 'relative',
      }}
    >
      <Button
        variant='tertiary'
        buttonColors={{mainColor: 'var(--secondary-clr)'}}
        styleSheet={{
          margin: ' .5rem',
          borderRadius: '50%',
          padding: '0 3px 0 0',
          minWidth: '50px',
          minHeight: '50px',
          fontSize: '20px',
          marginBottom: '8px',
          lineHeight: '0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'transparent',
          filter: isOpen ? 'grayscale(0)' : 'grayscale(1)',
          hover: {
            filter: 'grayscale(0)',
          }
        }}
        label="😋"
        onClick={() => setOpenState(!isOpen)} // important: logic no changes the actual logic value 
      />
      {isOpen && ( // short-circuit, because it´s inside a returning and if doesn´t returns nothing. Could´ve used ternary
        <Box
          styleSheet={{
            display: 'flex',
            flexDirection: 'column',
            borderRadius: '5px',
            position: 'absolute',
            backgroundColor: 'var(--dark)',
            width: {
              xs: '200px',
              sm: '290px',
            },
            height: '300px',
            right: '30px',
            bottom: '30px',
            padding: '16px',
            boxShadow: 'var(--bx-shadow)',
          }}
          onClick={() => setOpenState(false)}
        >
          <Text
            styleSheet={{
              color: 'var(--light)',
              fontWeight: 'bold',
            }}
          >
            Stickers
          </Text>
          <Box
            tag="ul"
            styleSheet={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              flex: 1,
              paddingTop: '16px',
              overflow: 'scroll', // try auto if necessary
            }}
          >
            {appConfig.stickers.map((sticker) => (
              <Text
                onClick={() => {
                  // console.log('[DENTRO DO COMPONENTE] Clicou no sticker:', sticker);
                  if (Boolean(props.onStickerClick)) {
                    props.onStickerClick(sticker);
                  }
                }}
                tag="li" key={sticker}
                styleSheet={{
                  width: '50%',
                  borderRadius: '5px',
                  padding: '10px',
                  focus: {
                    backgroundColor: "var(--grey)",
                  },
                  hover: {
                    backgroundColor: "var(--grey)",
                  }
                }}
              >
                <Image src={sticker} />
              </Text>
            ))}
          </Box>
        </Box>
      )}
    </Box>
  )
}