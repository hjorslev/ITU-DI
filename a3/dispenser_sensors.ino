#include <NewPing.h>
#include <CapacitiveSensor.h>
#include <LedControl.h>

///////////////////////////////////////////////////////////////
// SOUND
///////////////////////////////////////////////////////////////
// Define notes
#define NOTE_B0 31
#define NOTE_C1 33
#define NOTE_CS1 35
#define NOTE_D1 37
#define NOTE_DS1 39
#define NOTE_E1 41
#define NOTE_F1 44
#define NOTE_FS1 46
#define NOTE_G1 49
#define NOTE_GS1 52
#define NOTE_A1 55
#define NOTE_AS1 58
#define NOTE_B1 62
#define NOTE_C2 65
#define NOTE_CS2 69
#define NOTE_D2 73
#define NOTE_DS2 78
#define NOTE_E2 82
#define NOTE_F2 87
#define NOTE_FS2 93
#define NOTE_G2 98
#define NOTE_GS2 104
#define NOTE_A2 110
#define NOTE_AS2 117
#define NOTE_B2 123
#define NOTE_C3 131
#define NOTE_CS3 139
#define NOTE_D3 147
#define NOTE_DS3 156
#define NOTE_E3 165
#define NOTE_F3 175
#define NOTE_FS3 185
#define NOTE_G3 196
#define NOTE_GS3 208
#define NOTE_A3 220
#define NOTE_AS3 233
#define NOTE_B3 247
#define NOTE_C4 262
#define NOTE_CS4 277
#define NOTE_D4 294
#define NOTE_DS4 311
#define NOTE_E4 330
#define NOTE_F4 349
#define NOTE_FS4 370
#define NOTE_G4 392
#define NOTE_GS4 415
#define NOTE_A4 440
#define NOTE_AS4 466
#define NOTE_B4 494
#define NOTE_C5 523
#define NOTE_CS5 554
#define NOTE_D5 587
#define NOTE_DS5 622
#define NOTE_E5 659
#define NOTE_F5 698
#define NOTE_FS5 740
#define NOTE_G5 784
#define NOTE_GS5 831
#define NOTE_A5 880
#define NOTE_AS5 932
#define NOTE_B5 988
#define NOTE_C6 1047
#define NOTE_CS6 1109
#define NOTE_D6 1175
#define NOTE_DS6 1245
#define NOTE_E6 1319
#define NOTE_F6 1397
#define NOTE_FS6 1480
#define NOTE_G6 1568
#define NOTE_GS6 1661
#define NOTE_A6 1760
#define NOTE_AS6 1865
#define NOTE_B6 1976
#define NOTE_C7 2093
#define NOTE_CS7 2217
#define NOTE_D7 2349
#define NOTE_DS7 2489
#define NOTE_E7 2637
#define NOTE_F7 2794
#define NOTE_FS7 2960
#define NOTE_G7 3136
#define NOTE_GS7 3322
#define NOTE_A7 3520
#define NOTE_AS7 3729
#define NOTE_B7 3951
#define NOTE_C8 4186
#define NOTE_CS8 4435
#define NOTE_D8 4699
#define NOTE_DS8 4978

// Pin that is used for the speaker.
#define melodyPin 22 // Blue wire

//Mario main theme melody
int melody[] = {
    NOTE_E7, NOTE_E7, 0, NOTE_E7,
    0, NOTE_C7, NOTE_E7, 0,
    NOTE_G7, 0, 0, 0,
    NOTE_G6, 0, 0, 0};
//Mario main them tempo
int tempo[] = {
    12,
    12,
    12,
    12,
    12,
    12,
    12,
    12,
    12,
    12,
    12,
    12,
    12,
    12,
    12,
    12};

///////////////////////////////////////////////////////////////
// LED MATRIX
///////////////////////////////////////////////////////////////
// Pins used for the LED Matrix
const int DIN_PIN = 51; // yellow wire
const int CS_PIN = 52;  // orange wire
const int CLK_PIN = 53; // white wire

// Happy smiley
const uint64_t SMILEY_HAPPY[] = {
    0x003c428100666600};

// Standard smiley
const uint64_t SMILEY_STANDARD[] = {
    0x00007e0000666600};

// Sad smiley
const uint64_t SMILEY_SAD[] = {
    0x81423c0000666600};

// Very sad smiley
const uint64_t SMILEY_VERYSAD[] = {
    0x42423c0000666600};

const int IMAGES_LEN = sizeof(8) / 8;

LedControl display = LedControl(DIN_PIN, CLK_PIN, CS_PIN);

// Display smiley on LED Matrix.
/*
displayImage(SMILEY_HAPPY[i]);
if (++i >= IMAGES_LEN)
{
  i = 0;
}
delay(1000);
*/

///////////////////////////////////////////////////////////////
// SENSORS
///////////////////////////////////////////////////////////////
// Each sensor's trigger pin, echo pin, and max distance to ping.
// Pin 13 = Trigger (orange wire)
// Pin 12 = Echo (white wire)
NewPing dispenser(13, 12, 50);
NewPing door(3, 2, 200);

CapacitiveSensor cs_dispenser = CapacitiveSensor(10, 8); // 1M resistor between pins 10 & 8, pin 8 is sensor pin

//Booleans to switch between whether to toilet is occupied or not, and whether the dispenser has been used
bool occupied = false;
bool dispenser_used = false;

//Floats to keep count of how many guests there has been, and how many times the dispenser has been used
float guests = 0;
float used_soap = 0;

//How many ms the sensors should timeout to prevent double readings:
int entrance_delay = 2000;
int exit_delay = 2000;
int dispenser_delay = 2000;

void setup()
{
  Serial.begin(9600);         // Open serial monitor at 9600 baud to see ping results.
  pinMode(melodyPin, OUTPUT); //buzzer
  pinMode(13, OUTPUT);        //led indicator when singing a note
}

void displayImage(uint64_t image)
{
  for (int i = 0; i < 8; i++)
  {
    byte row = (image >> i * 8) & 0xFF;
    for (int j = 0; j < 8; j++)
    {
      display.setLed(0, i, j, bitRead(row, j));
    }
  }
}
int i = 0;

void loop()
{

  delay(500);
  Serial.println();
  //Serial.print("Door = ");
  //Serial.print(door.ping_cm());
  //Serial.print("cm ");
  Serial.println();
  Serial.print("Occupied: ");
  Serial.print("No");
  Serial.println();
  Serial.print("Guests: ");
  Serial.print(guests);
  Serial.println();
  Serial.print("Used soap: ");
  Serial.print(used_soap);
  Serial.println();

  if (door.ping_cm() < 60)
  {
    occupied = !occupied;
    guests = guests + 0.5;
    dispenser_used = false;
    delay(entrance_delay);
    Serial.print("Occupied: Yes");
    // Serial.print(occupied);
    Serial.println();
  }

  while (occupied)
  {
    if (door.ping_cm() < 60)
    {
      occupied = false;
      guests = guests + 0.5;
      delay(exit_delay);
    }

    //if(dispenser.ping_cm() <10){
    //dispenser_used = true;

    long start = millis();
    long total1 = cs_dispenser.capacitiveSensor(300);

    if (total1 > 500)
    {
      dispenser_used = true;
      Serial.print("Dispenser used: Yes ");
      //Serial.print(dispenser_used);
      Serial.println();
      delay(dispenser_delay);
      used_soap++;
    }
  }
}

// Play stuff using the speaker
void HappySong()
{
  Serial.println(" 'Mario Theme'");
  int size = sizeof(melody) / sizeof(int);
  for (int thisNote = 0; thisNote < size; thisNote++)
  {

    // to calculate the note duration, take one second
    // divided by the note type.
    //e.g. quarter note = 1000 / 4, eighth note = 1000/8, etc.
    int noteDuration = 1000 / tempo[thisNote];

    buzz(melodyPin, melody[thisNote], noteDuration);

    // to distinguish the notes, set a minimum time between them.
    // the note's duration + 30% seems to work well:
    int pauseBetweenNotes = noteDuration * 1.30;
    delay(pauseBetweenNotes);

    // stop the tone playing:
    buzz(melodyPin, 0, noteDuration);
  }
}

void SadSong()
{
  tone(melodyPin, NOTE_D2, 200);
  delay(400);
  tone(melodyPin, NOTE_D2, 200);
  delay(400);
  tone(melodyPin, NOTE_D2, 200);
  delay(400);
  tone(melodyPin, NOTE_D2, 200);
  delay(400);
  tone(melodyPin, NOTE_D2, 200);
  delay(1000);
}

void buzz(int targetPin, long frequency, long length)
{
  digitalWrite(13, HIGH);
  long delayValue = 1000000 / frequency / 2; // calculate the delay value between transitions
  //// 1 second's worth of microseconds, divided by the frequency, then split in half since
  //// there are two phases to each cycle
  long numCycles = frequency * length / 1000; // calculate the number of cycles for proper timing
  //// multiply frequency, which is really cycles per second, by the number of seconds to
  //// get the total number of cycles to produce
  for (long i = 0; i < numCycles; i++)
  {                                // for the calculated length of time...
    digitalWrite(targetPin, HIGH); // write the buzzer pin high to push out the diaphram
    delayMicroseconds(delayValue); // wait for the calculated delay value
    digitalWrite(targetPin, LOW);  // write the buzzer pin low to pull back the diaphram
    delayMicroseconds(delayValue); // wait again or the calculated delay value
  }
  digitalWrite(13, LOW);
}