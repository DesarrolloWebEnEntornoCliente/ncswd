Característica: El validador de PINs valida si el PIN introducido
tiene un formato correcto

  Como usuario
  Quiero validar mi PIN
  De modo que pueda comprobar si tiene el formato correcto

  Un PIN es válida cuando consiste en cuatro dígitos decimales y
  todos lo dígitos en posiciones pares son pares y todos los dígitos
  en posiciones impares son impares. El dígito menos significativo
  está en la posición 1 y el más significativo en la 4.

  Esquema del escenario: Validar PINs
    Dado el PIN en "<pin>"
    Cuando lo valida
    Entonces debería ver "<resultado>"

    Ejemplos: PINs inválidos
      | pin  | resultado      |
      | PINE | "PIN inválido" |
      |  123 | "PIN inválido" |

    Ejemplos: PINs válidos
      | pin  | resultado      |
      | 4321 | "PIN válido"   |
      | 8749 | "PIN válido"   |
