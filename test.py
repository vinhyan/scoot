def check_condition(gender, height ,weight):
    if gender == 'nam':
        if height >= 165 and weight >= 54:
            return True
    elif gender == 'nu':
        if height >= 160 and weight >= 50:
            return True
    else:
        return False
check_condition('nam' , 179 ,68)