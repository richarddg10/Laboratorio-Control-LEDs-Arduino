// Pines de los LEDs
const int ledPin1 = 12;
const int ledPin2 = 13;

// Pin del sensor de luz
const int sensorPin = A0;

// Almacenar los valores del sensor
int sensorValue = 0;


void setup() {
  // Pin del LED son salida
  pinMode(ledPin1, OUTPUT);
  pinMode(ledPin2, OUTPUT);

  // Pin del sensor es entrada
  pinMode(sensorPin, INPUT);

  Serial.begin(9600);
}

void loop() {
  // Leer el valor del sensor
  sensorValue = analogRead(sensorPin);
  recieveFromJS();
}

void recieveFromJS() {
char status = Serial.read();

switch(status){
  case 'onLED1':
    digitalWrite(ledPin1, HIGH);
    Serial.print("Led1Encendido");
    Serial.println();
  break;
  case 'offLED1':
    digitalWrite(ledPin1, LOW);
    Serial.print("Led1Apagado");
    Serial.println();
  break;

  case 'onLED2':
    digitalWrite(ledPin2, HIGH);
    Serial.print("Led2Encendido");
    Serial.println();
  break;
  case 'offLED2':
    digitalWrite(ledPin2, LOW);
    Serial.print("Led2Apagado");
    Serial.println();
  break; 
}
Serial.flush();
}