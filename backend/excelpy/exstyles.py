from openpyxl.styles import Font, Color, Alignment, Border, Side, NamedStyle

# Styles
ummanstyle = NamedStyle(name="header4")
ummanstyle.font = Font(name="Times New Roman", size=16)
ummanstyle.border = Border(
    bottom=Side(border_style="thin"),
    top=Side(border_style="thin"),
    right=Side(border_style="thin"),
    left=Side(border_style="thin"),
)
ummanstyle.alignment = Alignment(horizontal="center", vertical="center")
BoldFont = Font(bold=True, name="Times New Roman", size=14)

# SDW STYLE
sdwstyle = NamedStyle(name="Header")
sdwstyle.font = Font(name="Times New Roman", size=12, bold=True)
sdwstyle.border = Border(
    bottom=Side(border_style="medium"),
    top=Side(border_style="medium"),
    right=Side(border_style="medium"),
    left=Side(border_style="medium"),
)
sdwstyle.alignment = Alignment(horizontal="center", vertical="center")

# TSCET STYLE
tscetstyle = NamedStyle(name="tscet")
tscetstyle.font = Font(name="Times New Roman", size=16)
tscetstyle.border = Border(
    bottom=Side(border_style="thin"),
    top=Side(border_style="thin"),
)

aligncenter = Alignment(horizontal="center", vertical="center")
verticalcenter = Alignment(vertical="center")
text_red = Font(color="D60000", size=16, name="Times New Roman")
standart_font = Font(name="Times New Roman", size=16)

unvisible = Font(name="Times New Roman", size=16, color="ffffff")

balancestyle = NamedStyle(name="balancestyle")
balancestyle.font = Font(name="Times New Roman", size=12)
balancestyle.border = Border(
    bottom=Side(border_style="thin"),
    top=Side(border_style="thin"),
    right=Side(border_style="thin"),
    left=Side(border_style="thin"),
)
balancestyle.alignment = aligncenter

small_font = Font(name="Times New Roman", size=12, bold=True)
