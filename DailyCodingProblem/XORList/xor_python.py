from string import Template

source = [1, 2, 3, 4, 5, 6, 7]
#source = [25, 10, 2, 8, 5, 3]

temp_str = '$outer ^ $inner = $xor, max = $max'
temp_obj = Template(temp_str)
max_str = 'The maximum xor of two values is $max'
max_str_obj = Template(max_str)

max = 0

for outer in range(len(source)):
    outerValue = source[outer]
    for inner in range(outer + 1, len(source)):
        innerValue = source[inner]
        xor = outerValue ^ innerValue
        print(temp_obj.substitute(outer = outerValue, inner = innerValue, xor = xor, max = max))
        if ( xor > max):
            max = xor

print (max_str_obj.substitute(max = max))

