import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { TypeAnimation } from 'react-type-animation';
import { Transition } from "motion/react"
import * as motion from "motion/react-client"

const transition: Transition = {
  duration: 4,
  repeat: Infinity,
  repeatType: "reverse",
  ease: "easeInOut",
}

const box: React.CSSProperties = {
  width: 50,
  height: 50,
  backgroundColor: "#8df0cc",
  borderRadius: 10,
  position: "absolute",
  top: 0,
  left: 0,
  offsetPath: `path("M 239 17 C 142 17 48.5 103 48.5 213.5 C 48.5 324 126 408 244 408 C 362 408 412 319 412 213.5 C 412 108 334 68.5 244 68.5 C 154 68.5 102.68 135.079 99 213.5 C 95.32 291.921 157 350 231 345.5 C 305 341 357.5 290 357.5 219.5 C 357.5 149 314 121 244 121 C 174 121 151.5 167 151.5 213.5 C 151.5 260 176 286.5 224.5 286.5 C 273 286.5 296.5 253 296.5 218.5 C 296.5 184 270 177 244 177 C 218 177 197 198 197 218.5 C 197 239 206 250.5 225.5 250.5 C 245 250.5 253 242 253 218.5")`,
}

export default function Home() {
  return (
    <Box
      id="home"
      sx={(theme) => ({
        width: '100%',
        backgroundRepeat: 'no-repeat',

        backgroundImage:
          'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 90%), transparent)',
        ...theme.applyStyles('dark', {
          backgroundImage:
            'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 16%), transparent)',
        }),
      })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack
          spacing={2}
          useFlexGap
          sx={{ alignItems: 'center', width: { xs: '100%', sm: '70%' } }}
        >
          <Typography
            variant="h1"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'center',
              fontSize: 'clamp(3rem, 10vw, 3.5rem)',
            }}
          >
            <TypeAnimation
              sequence={
                ['Full Stack Developer', 2000,
                'Software Engineer', 2000]
                }
              wrapper="span"
              cursor={true}
              repeat={0}
              style={{display: 'inline-block' }}
            />
          </Typography>
          <Typography
            sx={{
              textAlign: 'center',
              color: 'text.secondary',
              width: { sm: '100%', md: '80%' },
            }}
          >
            Building reliable solutions with code that matters.
          </Typography>
        </Stack>
        <div style={{ position: "relative", marginTop: 50 }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="451" height="437">
                <motion.path
                    d="M 239 17 C 142 17 48.5 103 48.5 213.5 C 48.5 324 126 408 244 408 C 362 408 412 319 412 213.5 C 412 108 334 68.5 244 68.5 C 154 68.5 102.68 135.079 99 213.5 C 95.32 291.921 157 350 231 345.5 C 305 341 357.5 290 357.5 219.5 C 357.5 149 314 121 244 121 C 174 121 151.5 167 151.5 213.5 C 151.5 260 176 286.5 224.5 286.5 C 273 286.5 296.5 253 296.5 218.5 C 296.5 184 270 177 244 177 C 218 177 197 198 197 218.5 C 197 239 206 250.5 225.5 250.5 C 245 250.5 253 242 253 218.5"
                    fill="transparent"
                    strokeWidth="12"
                    stroke="var(--hue-6-transparent)"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={transition}
                />
            </svg>
            <motion.div
                style={box}
                initial={{ offsetDistance: "0%", scale: 2.5 }}
                animate={{ offsetDistance: "100%", scale: 1 }}
                transition={transition}
            />
        </div>
      </Container>
    </Box>
  );
}